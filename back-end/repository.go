package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/google/go-github/github"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
)

// Repository ...
type Repository struct {
	ID          string `json:"id"`
	UserName    string `json:"userName"`
	Name        string `json:"name"`
	Description string `json:"description"`
	URL         string `json:"url"`
	Language    string `json:"language"`
}

// GetRepositoriesByUser ...
func GetRepositoriesByUser(response http.ResponseWriter, request *http.Request) {

	params := mux.Vars(request)
	userName := string(params["userName"])

	var repositories []Repository

	repositories = GetAllRepositoriesByUser(userName)

	SaveAllRepositoriesByUser(repositories, userName)

	response.Header().Set("content-type", "application/json")
	json.NewEncoder(response).Encode(repositories)
}

// GetAllRepositoriesByUser ...
func GetAllRepositoriesByUser(userName string) []Repository {

	githubClient := github.NewClient(nil)

	var opt github.ActivityListStarredOptions
	var repositories []Repository

	for page := 0; page < 20; page++ {

		opt.PerPage = 100
		opt.Page = page

		repositoriesStarred, _, err := githubClient.Activity.ListStarred(context.Background(), userName, &opt)

		if err != nil || repositoriesStarred == nil {
			break
		}

		for _, element := range repositoriesStarred {

			var repository Repository

			repository.ID = strconv.FormatInt(*element.Repository.ID, 10)
			repository.UserName = userName
			repository.Name = *element.Repository.Name
			if element.Repository.Description != nil {
				repository.Description = *element.Repository.Description
			}
			repository.URL = *element.Repository.URL
			if element.Repository.Language != nil {
				repository.Language = *element.Repository.Language
			}

			repositories = append(repositories, repository)
		}

	}

	return repositories
}

// SaveAllRepositoriesByUser ...
func SaveAllRepositoriesByUser(repositories []Repository, userName string) bool {

	for _, repository := range repositories {

		collection := mongoClient.Database("git-tag").Collection("repository")
		ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
		collection.InsertOne(ctx, repository)

	}

	return true

}

// GetRepositoriesByTag ...
func GetRepositoriesByTag(response http.ResponseWriter, request *http.Request) {

	params := mux.Vars(request)
	tagName := string(params["tagName"])

	var repositories []Repository

	repositories = GetAllRepositoriesByTag(tagName)

	response.Header().Set("content-type", "application/json")
	json.NewEncoder(response).Encode(repositories)
}

// GetAllRepositoriesByTag ...
func GetAllRepositoriesByTag(tagName string) []Repository {

	var repositories []Repository
	var tag Tag

	// fmt.Printf(tagName + "\n")

	collectionTag := mongoClient.Database("git-tag").Collection("tag")
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	query := bson.M{
		"$text": bson.M{
			"$search": tagName,
		},
	}

	countDocument, err := collectionTag.CountDocuments(ctx, query)

	if err != nil {
		return nil
	}

	if countDocument != 0 {

		err := collectionTag.FindOne(ctx, query).Decode(&tag)

		if err != nil {
			return nil
		}

		for _, repositoryId := range tag.Repositories {

			var repository Repository

			collectionRepository := mongoClient.Database("git-tag").Collection("repository")
			collectionRepository.FindOne(ctx, bson.D{{"id", repositoryId}}).Decode(&repository)

			// collectionRepository.FindOne(ctx, Repository{ID: repositoryId}).Decode(&repository)

			fmt.Printf(repositoryId + "\n")
			fmt.Printf("%+v\n", repository)

			if err != nil {
				return nil
			}

			repositories = append(repositories, repository)
		}

	}

	return repositories
}

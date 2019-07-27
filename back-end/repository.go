package main

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"github.com/google/go-github/github"
	"github.com/gorilla/mux"
)

// Repository ...
type Repository struct {
	ID          int64  `json:"id"`
	UserName    string `json:"userName"`
	Name        string `json:"name"`
	Description string `json:"description"`
	URL         string `json:"url"`
	Language    string `json:"language"`
	Tags        string `json:"tags"`
	index       int    `json:"index"`
}

// GetRepositoryByUser ...
func GetRepositoriesByUser(response http.ResponseWriter, request *http.Request) {

	params := mux.Vars(request)
	userName := string(params["userName"])

	var repositories []Repository

	repositories = GetAllRepositoriesByUser(userName)

	SaveAllRepositoriesByUser(repositories, userName)

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

		for index, element := range repositoriesStarred {

			var repository Repository

			repository.ID = *element.Repository.ID
			repository.UserName = userName
			repository.Name = *element.Repository.Name
			if element.Repository.Description != nil {
				repository.Description = *element.Repository.Description
			}
			repository.URL = *element.Repository.URL
			if element.Repository.Language != nil {
				repository.Language = *element.Repository.Language
			}
			repository.index = index

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

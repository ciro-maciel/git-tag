package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Tag ...
type Tag struct {
	// https://kb.objectrocket.com/mongo-db/how-to-find-a-mongodb-document-by-its-bson-objectid-using-golang-452
	ID           primitive.ObjectID `bson:"_id, omitempty"`
	Name         string             `json:"name"`
	Repositories []string           `json:"repositories"`
}

// AddTagInRepository ...
func AddTagInRepository(response http.ResponseWriter, request *http.Request) {

	var tag Tag
	var repositories []string

	params := mux.Vars(request)
	repositoryID := string(params["repository"])
	json.NewDecoder(request.Body).Decode(&tag)

	collection := mongoClient.Database("git-tag").Collection("tag")
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	query := bson.M{
		"$text": bson.M{
			"$search": tag.Name,
		},
	}

	countDocument, err := collection.CountDocuments(ctx, query)

	if err != nil {
		response.WriteHeader(http.StatusInternalServerError)
		response.Write([]byte(`{ "message": "` + err.Error() + `" }`))
		return
	}

	if countDocument == 0 {

		tag.ID = primitive.NewObjectID()
		repositories = append(repositories, repositoryID)
		tag.Repositories = repositories

		collection.InsertOne(ctx, tag)

	} else {

		err := collection.FindOne(ctx, query).Decode(&tag)

		if err != nil {
			response.WriteHeader(http.StatusInternalServerError)
			response.Write([]byte(`{ "message": "` + err.Error() + `" }`))
			return
		}

		tag.Repositories = AppendIfMissing(tag.Repositories, repositoryID).([]string)

		fmt.Println(tag.ID)

		collection.UpdateOne(ctx, bson.D{{"_id", tag.ID}}, bson.D{
			{"$set", bson.D{
				{"repositories", tag.Repositories},
			}},
		})

	}

	response.Header().Set("content-type", "application/json")
	json.NewEncoder(response).Encode(tag)
}

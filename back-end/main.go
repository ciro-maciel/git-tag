package main

import (
	"context"
	"log"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var mongoClient *mongo.Client

func main() {

	router := NewRouter()

	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	clientOptions := options.Client().ApplyURI("mongodb://localhost:32771")
	mongoClient, _ = mongo.Connect(ctx, clientOptions)

	log.Fatal(http.ListenAndServe(":8080", router))

}

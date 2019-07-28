package main

import (
	"fmt"
	"net/http"
)

// Route ...
type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

// Routes ...
type Routes []Route

var routes = Routes{
	Route{
		"Index",
		"GET",
		"/",
		Index,
	},
	Route{
		"GetRepositoriesByUser",
		"GET",
		"/repository/user/{userName}",
		GetRepositoriesByUser,
	},
	Route{
		"GetAllRepositoriesByTag",
		"GET",
		"/repository/tag/{tagName}",
		GetRepositoriesByTag,
	},
	Route{
		"AddTagInRepository",
		"POST",
		"/tag/{repository}",
		AddTagInRepository,
	},
}

// Index ...
func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "API - git-tag")
}

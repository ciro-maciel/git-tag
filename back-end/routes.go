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
		"RepositoryByUser",
		"GET",
		"/repository/{userName}",
		GetRepositoriesByUser,
	},
}

// Index ...
func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "API - git-tag")
}

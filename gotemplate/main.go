package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"os"
)

type ExportSitemap struct {
	Date         string `json:"-"`
	ProjectTitle string `json:"project_title"`
	ID           string `json:"id"`
	ProjectID    string `json:"project_id"`
	Title        string `json:"title"`

	SitemapPages []SitemapPage `json:"sitemapPages"`
}

type SitemapPage struct {
	ID          string  `json:"id"`
	Title       string  `json:"title"`
	Description *string `json:"description"`
}

func main() {
	templateFile, err := os.ReadFile("sitemap-template.html")
	if err != nil {
		fmt.Println("Can't open template file", err)
		return
	}

	jsonData, err := os.ReadFile("mock.json")
	if err != nil {
		fmt.Println("Can't open mock data file", err)
		return
	}

	exportData := ExportSitemap{}
	err = json.Unmarshal(jsonData, &exportData)

	t, err := template.New("foo").Parse(string(templateFile))
	if err != nil {
		fmt.Println("aaaahhhg", err)
		return
	}

	exportData.Date = "2021-09-01"
	exportData.ProjectTitle = "Project Title example"

	file, err := os.Create("index.html")
	if err != nil {
		fmt.Println("Can't open file", err)
		return
	}

	// data := make(map[string]string)
	// data["Title"] = "Hello World"
	err = t.Execute(file, exportData)
}

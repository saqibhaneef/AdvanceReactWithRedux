export default {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#", 
	"$id": "https://example.com/object1729591260.json", 
	"title": "Root", 
	"type": "object",
	"required": [
		"comments",
		"auth"
	],
	"properties": {
		"comments": {
			"$id": "#root/comments", 
			"title": "Comments", 
			"type": "array",
			"default": [],
			"items":{
				"$id": "#root/comments/items", 
				"title": "Items", 
				"type": "string",
				"default": "",
				"examples": [
					"Comment 1"
				],
				"pattern": "^.*$"
			}
		},
		"auth": {
			"$id": "#root/auth", 
			"title": "Auth", 
			"type": "boolean",
			"examples": [
				true
			],
			"default": true
		}
	}
}

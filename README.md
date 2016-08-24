# SK Test API
## Fake responses for siesta tests

## Structure
The route will be dynamically created based on the location of the file

	e.g. http method = POST 'http://localhost:2337/auth/find'

	responses ->
		auth ->
			POST ->
				find.json

Any routes that need custom logic then add to routes folder

## Installation
1. npm install
2. node app.js
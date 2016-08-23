# SK Test API
responses for siesta tests

### structure
e.g. http method = POST 'http://localhost:2337/auth/find'
json file would then go in:

	responses ->
		auth ->
			POST ->
				find.json

### installation
npm install

node app.js
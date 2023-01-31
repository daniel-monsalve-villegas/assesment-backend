### Developing

1. Run **npm install** to install server dependencies

2. Configure the env

```shell
$cp .env.example .env
```

3. Update **.env** with the required info

4. Run **npm run dev** to start the development server

### Authentication user `/auth/local/login`

Request Body:

```json
{
  "email": "email@correo.com",
  "password": "123456"
}
```

Response:

```json
"profile": {
  "firstName": "name",
  "lastName": "last",
  "email": "email@correo.com",
},
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJkYXZpZCIsImxhc3ROYW1lIjoibHluY2giLCJlbWFpbCI6ImRhdmlkbHlAZ21haWwuY29tIiwiaWF0IjoxNjc0OTY4MDM5fQ.Lltgw2tDefgNxwFbmglRzYNUHcSUjz2jmesizwqypMg"
}
```

### Questions

1. Explain URL

- https:// -> scheme: this tell the web server which protocol to use to accesses the page
- backend -> subdomain: indicate which particular page of the website we are going to access
- mega-app -> second-level domain: the name of the website, the general domain, serve to access in an easy way to the server instead of using the ip.
- .com.co -> top-level domain: specifies what type of entity is registers the organization registers as on the internet and the ubication
- :8080 -> port: indicate the port which going to be use
- api/articles -> indicate the subdirectories the server is using
- search? -> tell the server is going to search for a value
- docid -> query: indicate the key is goint to search
- 1020 -> query: the value of the key to search
- &hl=en -> query: tell the server the host language is english
- #dayone -> fragment: select the day one

<<<<<<< HEAD
2. About API's and status codes
=======
2. About API's and status code
>>>>>>> main

- Web API -> Application programming interface for either a web server or a web browser. It's usually limited to a web application's client-side and thus usually does not include web server or browser implementation details unless publicly accessible by a remote web application.
- RESTful API -> Interface that two computational systems use to exchange information in a secure way throuhgt the internet. The RESTful Api admit this exchange of information because use secure software communication standards.
- Status code 200 -> Indicate the request has been successful. It's translate to _OK_
- Status code 400 -> The request can't be process or it's not going to process it because it's perceived as and client error. It's translate to _Bad Request_
- Status code 500 -> The request find an unexpected condition that doesn't allow to complete the request. It's translate to _Internal Server Error_

3. CRUD

refears to the basical fetch petitions to an API service, it means Create, Read, Update and Delete.

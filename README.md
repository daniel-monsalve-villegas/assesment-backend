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

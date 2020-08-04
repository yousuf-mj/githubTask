# Github task

The purpose of this application is to be able to be able to get basic information from a github user. The ap[plication is split into 2 services. The api and the front End

Parts of this where previously done, but not fully completed. so i continued on this

## Set up

This is a simple express application, and can be set up locally by running the following command in two seperate terminal instances

`cd api && cp .env.example .env && npm start`

`cd react-fe && cp .env.example .env && npm start`

This will serve up the api on port 8080 and the front end on port 3000

## Api options

There are 3 API endpoints within the app. All enpoints accept one post request
and that is a `username` option

1. Get user - This will return basic info about a github user

```
POST /api/user
{
	"username": "name"
}
```

2. Get Repos - This will return all the repos for a github user

```
POST /api/repos
{
	"username": "name"
}
```

3. Get Favourite language - This will return the most commonly used language from users repos

```
POST /api/language
{
	"username": "name"
}
```

### Any issues

I am mainly a backend developer that can work on front end and have not much issues picking up react work that has already been done. So i found issues and was delayed setting up some of the react forms and components effectivly.
I was unable to properly connect the front end and the back end in order to display the results from the api.
I left the db connection to last, and was unable to fully impliment a successful db connection and dataset

### Improvements

Fix up database, have it store all the times a user was searched and have a count of how many times that user was requested and what kind of data was required from them
Have the front end form display the results from the api. And have the form be able to make a request to the other endpoints aswel.

# Github task

The purpose of this application is to be able to be able to get basic information
from a github user

## Set up

This is a simple express application, and can be set up locally by running the following command:

`npm start`

This will serve up the application on port 8080

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

examples of a request

### What went well

set up of application went really well. And there was no issues using github api.
The documentaion is really clear, and the task was simple yet open enough to be able to complete.

### Any issues

Have not used an express app in a while, so just took a little extra time just to remember how the 
framework is used and how it interacted with certain sceneries. for example view files wont get complied 
and you have to copy these over into the dist folder.

### How can this be improved

Could add a database to the app. You can some of the requests that are being made. You could used store data to 
collect information about favourite languages. And have some statistics on what are popular languages that people use.

You can dockerise the application once you start adding in a database

There is currently no validation within the form, it would be ideal to have some form validation with all post requests.
can have api schema validation, and can even possibly have a front end form validation.
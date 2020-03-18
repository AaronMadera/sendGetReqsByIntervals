# SendGetReqsByIntervals
## Make GET request to a ceratin domain by a certain miliseconds inverval.

### Previous requirements:
[Node JS](https://nodejs.org/en/download/)
or
[Node JS Docker Image](https://hub.docker.com/_/node/)

### Configurations:
In config.js file there are some options for the main functions, these are:
* domain: For the request url
* interval: Time to wait for next request
* intents: How many requests to make in overall.

User can modify these values as it is needed.

*Just watch out with the url variable in index.js file, you should change this value before it is passed to axios.

### To start project:
```
npm install
```
### To run project:
```
npm start
```

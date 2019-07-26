
# senteroMERN

Sentero app is using a MERN stack (MongoDB (hosted on MongoAtlas), Express JS, React, Node JS). The app is hosted on Heroku.

# Getting Started

If you're getting started with this repo on your machine, make sure you have Node installed. You might also need Postman, Redux dev tools (chrome extension) and React (chrome extension). 

## Setting up the repo locally

```
git clone <repository_url>
cd into the root directory
npm run client-install 
npm run dev
```

## Deployment

### First time:
Ensure Heroku CLI is installed.

```
heroku login
heroku git:remote -a sentero-app
```

### Future Deployments
```
git add .
git commit -m
git push heroku master
```



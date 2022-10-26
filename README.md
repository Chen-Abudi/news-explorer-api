# Backend for Final Project at Practicum Program

# news-explorer-api 📰🌐🗺️

## Overview

- Intro
- Technologies & Techniques
- Routes
- Link to RESTful API

## Intro

This is the backend repo with custom RESTful API for News Explorer Service React App (**which is the final project at Practicum**).
The server is deployed on _GCP_ (Google Cloud Platform) virtual machine.
It was created with Express and MongoDB to create, store, read, update, and remove user and article data.

## 🛠️ Technologies & Techniques

- NodeJs
- Express.js / express-winston
- MongoDB
- Jsonwebtoken
- Celebrate / Joi
- Validator
- Postman for testing

## API Routes :

| RESTful API Enpoints | HTTP Methods |                  Usage Purpose |
| -------------------- | :----------: | -----------------------------: |
| /signup              |     POST     |              User Registration |
| /signin              |     POST     |                     User Login |
| /users/me            |     GET      |              GETting user data |
| /articles            |     GET      | GETting data from all articles |
| /articles            |     POST     |         Creating a new article |
| /articles/:articleId |    DELETE    |    DELETE an article by its id |

## _The project is evolving, more details soon_

## Link to RESTful API :

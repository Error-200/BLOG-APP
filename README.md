# BLOG-APP

An app for posting  blog  with comment, like, OAuth  and  Admin feature.


## Build Setup

**Requirements**

- Node JS
  
  - [guide](https://nodejs.org/en/download/)
  
  
- npm
  
  - [guide](https://docs.npmjs.com/cli/install)
  
  
 - React JS 
  
   - [guide](https://reactjs.org/docs/create-a-new-react-app.html)
  
  
  
- Mongodb

  The database used in the app is MongoDB, so it must be configured on you local machine. Follow the [guide](https://docs.mongodb.com/manual/administration/install-on-linux/) if you dont have   MongoDB installed

***Clone The Repository***


```
cd BLOG-APP
cd BLOG

```

***FOR SERVER***

```
> cd server
> npm install

create a .env file inside server and set your JWT_SECRET
e.g. JWT_SECRET=MYSECRETOKEN

> node app.js

App hosted at 
http://localhost:8080/

```

***FOR CLIENT***

```
> cd client
> npm install
> npm start

App hosted at 
http://localhost:3000/

```
***FOR MONGODB***

```
> mongod
````

**ADMIN SETUP**

```
> mongo
> show dbs
> use db name
   -select your respective db by db name default (blog-api)
 
> show collections
> db.users.find().pretty()
        - to list all users in your db
        
 > db.users.update( { _id: ObjectId("      ")}, ($set: {role: "admin"} ))
            - select the ObjectId of respective user you want to make admin
            
  ```

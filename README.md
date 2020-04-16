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
  
  ## O-Auth Setup
  

  ```
  
  > cd client 
  > touch src/config.json

  Add something like the following to this file:
  
  {
  "GOOGLE_CLIENT_ID": "XXXXX",
  "FACEBOOK_APP_ID": "XXXXX"
}

- To get the GOOGLE_CLIENT_ID and FACEBOOK_APP_ID follow the steps below.

```

**Google**
  
Step 1: Go to the developer console: - [link](https://console.developers.google.com/)
Step 2: Look up ‘oauth credentials’ in the search bar, and click the single option that pops up.
Step 3: Try to find the ‘Create credentials’ button. If you find it, go ahead and click on it. Choose ‘Oauth Client Id’ 
For application type, choose web application. 
Step 4: Click save, and copy down the Client Id and Client Secret values that are hiding somewhere on the same page.

**Facebook**

Step 1: Go to https://developers.facebook.com/apps/ and select ‘Add a new app.’
Step 2: Give your app a name and complete the security question.
Step 3: If you see an option to select products, choose ‘Facebook Login.’
Step 3: Go to Settings and under App Domains type ‘localhost.’
Step 4: Click Facebook Login under Products in the side bar, and add the following redirect url: http://localhost:3000/api/auth/facebook/callback

const express = require('express');
const cors = require('cors');
const { MongoClient } = require("mongodb");



const app = new express();


//connecting to mongodb
const mongodb_url = "mongodb://localhost:27017";
const collection_name ="users";
const db_name = "usersdb";

//creating a mongodb instance
const mongodb = new MongoClient(mongodb_url);

app.listen(3001, async ()=>{
    console.log("app is listening on port 3001");
    await mongodb.connect();
    collection = mongodb.db(db_name).collection(collection_name);
})

//get all data
app.get("/", async (req, res)=>{
   console.log(await collection.find({}).toArray());
   res.send("something");
   res.status(200);
})








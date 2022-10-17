const express = require("express");
const {MongoClient} = require('mongodb');


const app = new express(); //instantiating  express object
const client = new MongoClient("mongodb://localhost:27017");
var collection = client.db("usersdb").collection("users");  //saving up reference

 
app.listen(3000, ()=>{
   console.log("the serve is listening on port 3000");
})

app.get("/",  async (req, res)=>{
    await  client.connect();
    // console.log(await client.db("usersdb").collection("users").find({}).toArray());
    console.log(await collection.find({}).toArray());
    res.send("Showing all data");
});

app.post("/pst", async (req,res)=>{
    await res.status(201).json();

    await  client.connect();
    await collection.insertOne({
        name: 'Otto',
        surname: 'High tower'
       }).catch((err)=>{
            console.log(err);
      });
      await collection.insertOne({
        name: 'Atom',
        surname: 'High'
       }).catch((err)=>{
            console.log(err);
      });
    
})

app.delete('/dlt',async (req, res)=>{
    await res.status(200).json();
    await collection.deleteOne({name:'Atom'});
})

app.put('/put', async (req, res)=>{
    await res.status(200).json();
   await collection.updateOne({name:'John'}, {$set:{name:'Jon', surname:"Snow"}});
})





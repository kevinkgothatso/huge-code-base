const express = require('express');
const mongoose = require('mongoose');
const user = require('./models/user');


const app = new express();

mongoose.connect("mongodb://localhost:27017/usersdb",{ useNewUrlParser: true });

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

app.get('/', async (req, res)=>{
  // works 
   console.log(await user.find({}));
    res.send("get");
    res.status(200).json();
});

app.post('/pst', async (req, res)=>{
 //works 
    const user_data = new user({
        name: "Praise",
        surname: "Morgets"
    });


    await user_data.save();
    res.send("post");
    res.status(200).json();
});

app.put('/put', async (req, res)=>{
     //find by id and update 
    // await  user.findByIdAndUpdate('6339ae484aec916488b8bfc9',{
    //     name: "Praise",
    //     surname: "Morgets"
    // }); 
  

    //custom edit and update
    await user.findOne({surname:"Morgets"}).updateOne({
        name: "Thabo",
        surname: "Maxim"
    })
    res.send("edit"); 
    res.status(200).json();
});

app.delete('/dlt', async (req, res)=>{
     //delete by ID
    // await user.findByIdAndDelete("634197f49b9b3e6e88bd9715");
    // res.send("delete");
    // res.status(200).json();


    //custom field delete
    await user.findOne({name: "Jon"}).deleteOne();
    res.send("delete");
    res.status(200).json();
});

const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("public"));

app.listen(8080, ()=>{
    console.log("Running Express");
});
 
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html')); 
});

app.get('/about', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'about.html')); 
});


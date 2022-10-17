const http = require('http');


const server = http.createServer((req, res)=>{
     
    if(req.url === "/"){
       console.log("Hey there");
       res.end("working");
    }
})

server.listen(3000);
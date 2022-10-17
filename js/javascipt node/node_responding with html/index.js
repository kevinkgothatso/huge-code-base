
const http = require("http"); //requesting build in object
const fs = require("fs");


//defining page objects
const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const servicesPage  = fs.readFileSync('services.html');

const server = http.createServer((req, res)=>{
    if(req.url === "/about"){
        res.end(aboutPage);
    }
    else if(req.url === "/"){
         res.end(homePage);
    }
    else if(req.url === "/services"){
        res.end(servicesPage)
    }
    else{
        res.writeHead(404);
        res.end("404 error");
    }
});

server.listen(8081, ()=>{
    console.log("Server is running on port 8081")
}); //specifying url path and starting server
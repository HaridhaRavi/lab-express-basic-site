const express = require("express"); 

const app = express(); 


// Make everything inside of public/ available
app.use(express.static('public'));

app.get("/", (request, response, next) => {
    console.log("this is the homePage"); 
    
    response.sendFile(__dirname + '/views/index.html');
});

app.get("/about", (request, response, next) => {
    console.log("this is the about page"); 
    
    response.sendFile(__dirname + '/views/about.html');
});

app.get("/work", (request, response, next) => {
    console.log("this is the work page"); 
    
    response.sendFile(__dirname + '/views/work.html');
});

app.listen(3001, () => console.log('My first app listening on port 3001! '));
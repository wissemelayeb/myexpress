const express = require("express"); 
const daterequire = require("./views/MiddleWare/date.js");

//init express
const app = express();
//middllware
app.get("/",daterequire, (req, res) => {
    res.send("<h1>hello world</h1> <a href='home'>click here to start app</a>");
});
app.get("/home",daterequire, (req, res) => {
    res.sendFile(__dirname+"/views/home.html");
});
app.get("/service",daterequire, (req, res) => {
    res.sendFile(__dirname+"/views/service.html");
});
app.get("/contact",daterequire, (req, res) => {
    res.sendFile(__dirname+"/views/contact.html");
});

//port
app.listen(5001,err=> {
    if (err) {console.log(err)}
else console.log("server is running on http://localhost:5001")
});

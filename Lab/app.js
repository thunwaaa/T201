const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Welcome to my Server");
});

app.get("/name/:firstname", function(req,res) {
    res.send("Hello" + req.params.firstname);
});

app.get("/xxx/:smth", function(req,res){
    if(req.params.smth.startsWith("abc")){
        res.send("Correct path");
        console.log("Great User");
    }
    else{
        res.send("This is bad request");
    }

});

app.listen(8000,function(){
    console.log("server start at 8000");
});
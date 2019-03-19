var express = require("express");       

var app = express();

app.use(express.static("./pubilc"));

app.get("/haha",function(req,res){
   res.send("haha");

})
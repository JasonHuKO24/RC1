
var express = require("express");

var app = express();

app.use(function(req,res,next){
    console.log(new Date());
    next();
});

app.get("/haha",function(req,res){
    console.log("哈哈");
});

app.use("/admin",function(req,res){
    res.write(req.originalUrl + "\n");
    res.write(req.baseUrl + "\n");
    res.write(req.path + "\n");
    res.end("你好");
});

app.listen(3000);
var express = require("express");

var app = express();

app.use ("/jingtai",function(req,res){
    res.send("哈哈");
});

app.use(function(req,res){
    res.status(404).send("没有这个画面");
});

app.listen(3000);
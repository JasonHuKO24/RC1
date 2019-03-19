var express = require("express");

var app = express();

app.get ("/",function(req,res){
     res.end("你好");
});
app.get ("/haha",function(req,res){
    res.end("这是haha页面，哈哈哈哈");
});



app.lisetn(3000);
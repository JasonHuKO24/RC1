var express = require("express");
var app = express();
var db = require("./model/db.js");

//设置模板引擎
app.set("view engine","ejs");

//静态服务
app.use(express.static("./public"));
//显示列表
app.get("/",function(req,res,next){
    res.render("index");
})


app.listen(3000);
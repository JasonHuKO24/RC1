var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get("/",function(req,res){   
    res.send("猜你喜欢"+req.cookies.mudidi);
});

app.get("/jipiao",function(req,res){
    var mudidi =req.query.mudidi;
    //记录用户的喜好
    //先读取用户的爱好，然后把新的爱好push上去
    var mudidiarry = req.cookies.mudidi || [];
    mudidiarry.push(mudidi);
    res.cookie("mudidi",mudidiarry,{maxAge:900000,httpOnly:true})
    res.send(mudidi + "旅游攻略");
});

app.listen(3000);


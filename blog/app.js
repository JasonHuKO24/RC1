var express = require('express');
var swig = require('swig');
var mongoose = require('mongoose');
//加载body-parser，用来处理post提交过来的数据
var bodyParser =require('body-parser');
//加载cookies模块
var Cookies= require('cookies');
var app = express();

var User = require('./models/User');

//设置静态文件托管
app.use('/public',express.static(__dirname + "/public"));

//配置应用模板
app.engine('html',swig.renderFile);
//设置模板文件存放的目录
app.set('views','./views');
//注册所使用的模板引擎
app.set('view engine','html');
//在开发中需要取消模板缓存
swig.setDefaults({cache: false});

//bodyparaser的设置
app.use(bodyParser.urlencoded({extended : true}))

//设置cookie
app.use(function(req,res,next){
   req.cookies = new Cookies(req,res);

//解析登陆用户的cookie信息
   req.userInfo = {};
   if(req.cookies.get('userInfo')){
       try{
           req.userInfo = JSON.parse(req.cookies.get('userInfo'))

           //获取当前用户的类型，是否事管理员
           User.findById(req.userInfo._id).then(function(userInfo){
               req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
               next();
           })
       }catch(e){
        next();
       }
   }else {
       next()
   }
})

//划分不同的模块
app.use('/admin',require('./routers/admin'))
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'))

mongoose.connect('mongodb://localhost:27017/blog',function(err){
    if(err){
        console.log('数据库连接失败');
    }else { 
        console.log('数据库连接成功');
        app.listen(3000);
    }
})
//引包
var mongoose = require('mongoose');
//创建数据库的连接
var db  = mongoose.createConnection('mongodb://127.0.0.1:27017/xixi'); 
//监听open事件
db.once('open',function(callback){
    console.log("数据库连接成功")
})
//向外暴露
module.exports = db;

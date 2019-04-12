var mongoose = require('mongoose');
var db = require("./db.js");
//创建了一个  Schema 结构
var studentSchema = new mongoose.Schema({
    name : {type : String},
    age    : {type : Number},
    sex  : {type : String},
});

// 添加 mongoose 静态方法
studentSchema.statics.zhaoren = function(name, callback) {
   this.model('Student').find({name: name}, callback);
}
//创建修改的静态方法
studentSchema.statics.xiugai = function(conditions,update,callback){
    this.model("Student").update(conditions, update, options,callback);
}
//创建一个模型，就是学生模型，就是学生类。
//类是基于schema创建的。
var studentModel = db.model('Student',studentSchema);
//向外暴露
module.exports = studentModel;


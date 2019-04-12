//引包
var mongoose = require('mongoose');
//创建一个数据库连接
mongoose.connect('mongodb://localhost/test');

//创建一个Cat的一个模型
var Cat = mongoose.model('Cat', { name: String , age : Number,sex :String});
//实例化
var kitty = new Cat({name: 'tom',age :15, sex :"公猫"});
//保存
kitty.save(function (err){
    console.log('meow');
})

//修改tom的age = 8  
Cat.find({"name":"tom"},function(err,result){ 
    var xiaomao = result[0];

    xiaomao.age =8;
    xiaomao.save();
});
//引包
const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/xixi');
//创建一个模型 
const Cat = mongoose.model('Cat', { name: String });
//实例化一只猫
const kitty = new Cat({ name: 'Zildjian' });
//调用这只猫得save方法,保存这只猫 
kitty.save().then(() => console.log('meow'));


var tom  = new Cat({"name":"汤姆"});
tom.save(function(){
    console.log('meow');
})
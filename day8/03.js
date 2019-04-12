var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("数据库成功打开")
});

var animalSchema = new mongoose.Schema({
    "name" : String,
    "type" : String
  });

  animalSchema.methods.zhaotonglei = function(callback){
      this.model('Animal').find({"type" : this.type},callback);
  }

  var Animal = mongoose.model('Animal', animalSchema);
  
//    Animal.create({"name":"汤姆","type":"猫"});
//    Animal.create({"name":"小白","type":"狗"});
//    Animal.create({"name":"加菲","type":"猫"});
//    Animal.create({"name":"小黑","type":"狗"});

Animal.findOne({"name":"小白"},function(err,result){
    var dog = result;
    dog.zhaotonglei(function(err,result){
        console.log(result);
    })
});
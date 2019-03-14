var http =require("http");
var fs = require("fs")

var server = htttp.createServer(function(req,res){
  
    if(req.url =="/favicon.ioc"){
        console.log(wenjianjia);
        return;
    }
    fs.readDir("/.album",function(err,files){
        var wenjianjia = [];

      function iterator(i){
         fs.stat("./album/"+ files[i],function(err,stats){
             if(stats.isDirectory()){
                 wenjianjia.push(files[i]);
             }
             iterator(i+1);
         })
      }(0);
    });
    res.end();
})
server.listen(3000,"127.0.0.1")
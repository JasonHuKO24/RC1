var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
if(req.url =="/favicon.ico"){
    return;
}
fs.stat("./album/aaa",function(err,data){

    console.log(data.isDirectory());
});
});

server.listen(3000,"127.0.0.1");
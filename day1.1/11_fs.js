var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
if(req.url =="/favicon.ico"){
    return;
}
fs.readdir("./album",function(err,files){

    console.log(files);
});
});

server.listen(3000,"127.0.0.1");
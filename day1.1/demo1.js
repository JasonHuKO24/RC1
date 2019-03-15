var http = require("http")
var fs = require("fs")
var server = http.createServer(function(req,res){
if(req.url=="/favicon.ico"){
    return;
}
var userid = parseInt(Math.random()*89999)+10000;
console.log=("欢迎"+userid);
res.writeHead(200,{"context-type":"text/html;charset=utf-8"})
fs.readFile("./test/1.txt",function(err,data){
    if(err){
        throw err;
    }
    console.log(userid+"文件读取完毕");
    res.end(data);
})
})

server.listen(3000,"127.0.0.1")
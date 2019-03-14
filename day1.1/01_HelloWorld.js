var http = require("http");

var server = http.createServer(function(req,res){
     
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    res.end("哈哈哈，我买了一个橘子" +(1+2+3)+"s")
})
server.listen(8080,"127.0.0.1");
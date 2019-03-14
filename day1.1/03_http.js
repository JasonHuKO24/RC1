var http = require("http");
var server = http.createServer(function(req,res){
    console.log("服务器收到了请求"+req.url)
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write("<h1>我是标题<h1>")
    res.write("<h2>我是标题<h2>")
    res.write("<h2>我是标题<h2>")
    res.end("<h3>我是标题<h3>")
    //res.end("(1+2+3)/to.string")
})
server.listen(3000,"127.0.0.1")
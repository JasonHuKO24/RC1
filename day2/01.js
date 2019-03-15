var http = require("http");

var server=http.createServer(function(req,res){
      res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
      res.write("<u1>哈哈</u1>")    
      res.write("<li>哈哈</li>")  
      res.write("<h1>哈哈</h1>") 
      res.end("成功");
})

server.listen(80,"127.0.0.1")
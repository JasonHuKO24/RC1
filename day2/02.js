var http = require("http");

var server=http.createServer(function(req,res){
      if(req.url =="/"){
            res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
            res.end("成功");
      }else{
            res.writeHead(404,{"content-type":"text/html;charset=utf-8"});
            res.end("失败");
      }
      return;
})

server.listen(80,"127.0.0.1")
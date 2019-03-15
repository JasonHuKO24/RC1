var http = require("http");
var url = require ("url");
var fs = require ("fs");
var server = http.createServer(function(req,res){
 
    var pathname = url.parse(req.url).pathname;
    fs.readFile("./static/"+pathname,function(err,data){
    if(err){
        fs.readFile("./static/404.html",function(err,data){
            res.writeHead(404,{"context-type":"text/html;charset=utf-8"});
            res.end(data);
        })
        return;
    };
    res.end(data);
    });
    
})
server.listen(3000,"127.0.0.1");
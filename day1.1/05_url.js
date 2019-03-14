var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url).query;
    var path = url.parse(req.url).pathname;
    console.log("pathname:"+ pathname);
    console.log("query:"+ query);
    res.end();
});

server.listen(3000,"127.0.0.1")
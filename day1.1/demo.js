var http = require ('http')
var server = http.createServer(function(req,res){

    res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
    res.end("hahaha")
})
server.listen(8088,"127.0.0.1")
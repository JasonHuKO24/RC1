var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
    console.log('收到用户请求,请求地址:'+req.url)

    res.setHeader('content-Type','text/html;charset=utf-8');
    res.write("来啊,<a href='http://nn.com'>点击进入我的世界</a>");
    res.end();
})
server.listen(8080,function(){
    console.log('服务启动成功, 访问:http://localhost:8080')
})
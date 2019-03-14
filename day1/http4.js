var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
    console.log('收到用户请求,请求地址:'+req.url)
    
    //判断请求的地址
    if (req.url == '/'){
        $msg = 'this is index' 
    }else if (req.url == '/login'){
        $msg = 'this is login'
    }else {
        $msg = '404'
    }
    res.setHeader('content-Type','text/html;charset=utf-8');
    //res.write("来啊,<a href='http://nn.com'>点击进入我的世界</a>");
    res.write($msg);
    res.end();
})
server.listen(8080,function(){
    console.log('服务启动成功, 访问:http://localhost:8080')
})
//1.引入模块
var http = require('http')
//2.创建web服务器
var server = http.createServer()
//3.监听请求
server.on('request',function(req,res){ //request 请求 response 响应
   console.log('收到客户请求,请求地址:'+req.url)
})
//4.启动服务
server.listen(8080,function(){
    console.log('服务启动成功，访问:http://localhost:8080')
})


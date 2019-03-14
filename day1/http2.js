//引入模块
var http =require('http')
//创建web服务器
var server = http.createServer()
//监听用户请求
server.on('request',function(req,res){
    res.write('hello,itcast')
    res.end()
})
//启动服务
server.listen(8080,function(){
console.log('服务启动成功,测试:http://localhost:8080')
})
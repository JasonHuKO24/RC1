const path = require('path')
const bodyparser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles =require('koa-static');
const milog = require('./mi-log')
const ip = require('ip')

const miSend = require('./mi-send')

module.exports = (app) =>{
//指定 public目录为静态资源目录， 用来存放js css images等
app.use(staticFiles( path.resolve(__dirname, "../public")))

app.use(nunjucks ({
    ext:'html', 
    path:path.join(__dirname,'../views'),//指定视图目录
    nunjucksConfig:{ 
    trimBlocks:true
}  //开启转义 
}))
 
app.use(milog({
   env: app.env, //koa 提供环境变量
   projectName:'koa2-tutorial',
   appLogLevel:'debug',
   dir :'logs',
   serverIp: ip.address()
}))
app.use(bodyparser())
app.use(miSend())
}
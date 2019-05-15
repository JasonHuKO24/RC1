const Koa =require('koa');
const path = require('path');
const bodyParser =require('koa-bodyparser');
const ejs =require('ejs');
const session =require('koa-session-minimal');
const MysqlStore =require('koa-mysql-session');
const config = require('./config/default.js');
const router = require('koa-router');
const views = require('koa-views');
const staticCache =require('koa-static-cache')

const app =new Koa()

//session存储配置
const sessionMysqlConfig ={
     user:config.database.USERNAME,
     password:config.database.PASSWORD,
     database:config.database.DATABASE,
     host:config.database.HOST,
}

//设置session中间件
app.use(session({
    key:"USER_SID",
    store:new MysqlStore(sessionMysqlConfig)
}))

// //配置静态资源中间件
// app.use(koaStatic(
//     path.join(__dirname,'./public')
// ))
//缓存
app.use(staticCache(path.join(__dirname,'./public'),{dynamic:true},{
    maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname,'./images'),{dynamic:true},{
    maxAge:365 * 24 * 60 * 60
}))

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
  }))
app.use(bodyParser({
    formLimit:'1mb'
}))

app.use(require('./routers/signup.js').routes())
app.use(require('./routers/signup.js').routes())

app.listen(3000);

console.log(`listening on port ${config.port}`)

// koa node框架
// koa-bodyparser 表单解析中间件
// koa-mysql-session、koa-session-minimal 处理数据库的中间件
// koa-router 路由中间件
// koa-static 静态资源加载中间件
// ejs 模板引擎
// md5 密码加密
// moment 时间中间件
// mysql 数据库
// markdown-it markdown语法
// koa-views 模板呈现中间件
// chai mocha 测试使用
// koa-static-cache 文件缓存

// config 存放默认文件
// lib 存放操作数据库文件
// middlewares 存放判断登录与否文件
// public 存放样式和头像文件
// routes 存放路由文件
// views 存放模板文件
// index 程序主文件
// package.json 包括项目名、作者、依赖
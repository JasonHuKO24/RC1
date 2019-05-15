const koa =require('koa');

const app = new koa();
const router = require('./router')
const middleware = require('./middleware')


middleware(app)
router(app)

app.listen(3000 ,() =>{
    console.log('server is running')
});


//router.js:注册项目中所有的路由
//middleware:集中管理项目中用到的所有中间件,包括定自定义的中间件
//controller：路由请求对应的处理函数
//service: 提供controller逻辑中需要用到的底层数据
//views 集中管理所有的视图模板文件.
//public：集中管理所有的静态文件
//app ：项目入口文件;

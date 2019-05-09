const Router =require('koa-router');
const HomeController = require('./controller/home')
const router = new Router()

module.exports =(app)=>{
router.get('/',HomeController.index)

router.get('/home',HomeController.home)

router.get('/home/:id/:name',HomeController.homeParmas)

router.get('/404',async(ctx,next) =>{
    ctx.response.body='<h1>404 page</h1>'
})

router.get('/user',HomeController.login)

//增加响应表单请求的路由
router.post('/user/register',HomeController.register)

app.use(router.routes())
   .use(router.allowedMethods());
}

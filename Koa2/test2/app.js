const koa = require('koa');
const Router =require('koa-router');
const bodyParser = require('koa-bodyparser')
const app =new koa()
const router = Router();

app.use(bodyParser())

router.get('/',async (ctx,next)=>{
    ctx.response.body='<h1>index page</h1>'
})

router.get('/home',async (ctx,next)=>{
    console.log(ctx.request.query);
    console.log(ctx.request.querystring)
    ctx.response.body='<h1>home page</h1>'
})

router.get('/home/:id/:name',async(ctx,next) =>{
    console.log(ctx.params);
    ctx.response.body='<h1>/home/:id/:name</h1>'
})

router.get('/404',async(ctx,next) =>{
    ctx.response.body='<h1>404 page</h1>'
})

router.get('/user',async(ctx,next) =>{
    ctx.response.body=
    `
    <form action="/user/register" method='post'>
    <input name="name" type="text" placeholder="输入用户名:jasonhu" />
    <br/>
    <input name="password" type="text" placeholder="输入密码:123456" />
    <br/>
    <button>sumbit</button>
    </form>
    `
})

router.post('/user/login',async(ctx,next)=>{
    let {name,password} = ctx.request.body
    if(name ==='jasonhu' && password ==='123456'){
        ctx.response.body=`Hello, ${name}!`
    }else{
        ctx.response.body='用户信息错误'
    }
})


app.use(router.routes())

app.listen(3000);

/**
 * 1
 */
// const koa = require('koa');
// const Router = require('koa-router')
// const app = new koa()
// const router = Router();

// router.get('/', async (ctx,next) =>{
//     ctx.response.body= '<h1>index page</h1>'
// })

// router.get('/home', async (ctx,next) =>{
//     console.log(ctx.request.query);
//     console.log(ctx.request.querystring)
//     ctx.response.body='<h1>HOME page</h1>'
// })
// router.get('/404', async (ctx,next) =>{
//     ctx.response.body = '<h1>404 page</h1>'
// })
// router.get('/home/:id/:name',async (ctx,next) =>{
//     console.log(ctx.params)
//     ctx.response.body='<h1>Home page /:id/:name</h1>'
// })

// app.use(router.routes());

// app.listen(3000);
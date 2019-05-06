/**
 * 10
 */
// const koa = require('koa');
// const views = require('koa-views');
// const path = require('path');
// const bodyParser = require('koa-bodyparser')
// const static = require('koa-static');
// const app = new koa();
// const Router = require('koa-router')
// const router = new router()

// app.use(views(__dirname + '/views',{
//     map: {html:'ejs'}
// }))

// app.use(static(
//     path.join(__dirname,'/static')
// ))
// router.get('/',async(ctx,next) =>{
//    await ctx.render("index")
// })
// router.post('/',(ctx, next) =>{
//     let postData = ctx.requset.body;
//     ctx.body = postData
// })
// app.
//     use(bodyParser())
//     use(router.routes())
//     use(router.allowedMethods)
// app.listen(3000);
/**
 * 9
 */
// const koa = require('koa')
// const app = new koa();
// const bodyParser = require('koa-bodyParser');
// const Router = require('koa-router')
// const router = new Router();

// router.get('/',(ctx,next) =>{
//     ctx.type ='html';
//         let html=`
//         <form method="POST" action="/"/>
//         <p>用户名</p>
//         <input name="userName" /><br/>
//         <p>密码</p>
//         <input name="password" type="password" /><br/>
//         <button type="submit">submit</button>
//         </form>
//         `
//         ctx.body=html
// })
// router.post('/',(ctx,next) =>{
//     let postData = ctx.request.body
//           ctx.body = postData
// })
// app
//    .use(bodyParser())
//    .use(router.routes())
//    .use(router.allowedMethods())

// app.listen(3000);

/**
 * 8
 */
// const koa = require('koa');
// const app = new koa();
// const bodyParser = require('koa-bodyparser');

// app.use(bodyParser ())
// app.use(async (ctx) =>{
//     if(ctx.url ==='/',ctx.method ==='GET'){
        // ctx.type ='html';
        // let html=`
        // <form method="POST" action="/"/>
        // <p>用户名</p>
        // <input name="userName" /><br/>
        // <p>密码</p>
        // <input name="password" type="password" /><br/>
        // <button type="submit">submit</button>
        // </form>
        // `
        // ctx.body=html
//     }else if(ctx.url ==='/' && ctx.method ==="POST"){
//         let postData = ctx.request.body
//         ctx.body = postData
//     }
// })

// app.listen(3000);
/**
 * 7
 */
// const koa = require('koa')
// const app = new koa();

// app.use(async (ctx, next) => {
//     let stime = new Date().getTime()
//     await next()
//     let etime = new Date().getTime()
//     ctx.response.type = 'text/html'
//     ctx.response.body = '<h1>Hello World</h1>'
//     console.log(`请求地址: ${ctx.path}，响应时间：${etime - stime}ms`)
//   });
// app.use(async (ctx,next) =>{
//     console.log('中间键 do somthing');
//     await next();
//     console.log('中间件执行 over')
// })

// app.listen(3000);
/**
 * 6
 */
// const koa  = require('koa');
// const app = new koa();

// const compose = require('koa-compose')
// async function middleware1(ctx,next){
//     //do something
//     console.log('one start');
//     await next();
//     console.log('one end')
// };
// async function middleware2(ctx,next){
//     //do something
//     console.log('two start');
//     await next();
//     console.log('two end')
// }
// async function middleware3(ctx,next){
//     //do something
//     console.log('three start');
//     await next()
//     console.log('three end')
// }
// const all = compose([middleware1,middleware2,middleware3]);
// app.use(all);

// app.listen(3000)

/**
 * 5
 */
// const koa= require('koa')
// const app = new koa();

// app.use(async function(ctx,next){
//     console.log('one start');
//     await next();
//     console.log('one end')
// })
// app.use(async function(ctx,next){
//     console.log('two start');
//     ctx.body='two';
//     await next();
//     console.log('two end');
// })
// app.use(async function(ctx,next){
//     console.log('three start');
//     ctx.body='three';
//     await next();
//     console.log('three end')
// })

// app.listen(3000);

/**
 * 4
 */

// const koa = require('koa');
// const app = new koa();

// app.use(async (ctx) =>{
//     ctx.response.status =200;
//     if(ctx.request.accepts('json')){
//         ctx.response.type ='json';
//         ctx.response.body = {data :'hello world'}
//     }else if(ctx.request.accepts('html')){
//         ctx.response.type = 'html';
//         ctx.response.body = '<p>hello world</p>'
//     }else{
//         ctx.response.type = 'text';
//         ctx.response.body = 'hello world'
//     }
// })

// app.listen(3000);

/**
 * ctx.response.redirect(url,[alt])
 */

/**
 * 3
 */
// const koa = require('koa');
// const app = new koa();

// app.use(async (ctx) =>{
//  if(ctx.request.method ==='POST'){

//  }else if(ctx.request.method ==='GET'){
//      if(ctx.request.path !=='/'){
//          ctx.response.type = 'html';
//          ctx.response.body = '<a href="/">GO TO Index</a>'
//      }else{
//          ctx.response.body = 'Hello world';
//      }
//  }
// })

// app.listen(3000);


/**
 * 2
 */
// const koa = require('koa');
// const app = new koa();

// app.use(async (ctx) =>{
//     let postdata = '';
//     ctx.req.on('data',(data) =>{
//         postdata += data;
//     })
//     ctx.req.on('end',() =>{
//         console.log(postdata);
//     })
// })

// app.listen(3000);




/**
 * 1
 */
// const koa = require('koa');
// const app = new koa ();

// app.use(async (ctx) =>{
//    ctx.response.body = {
//        url:ctx.request.url,
//        query:ctx.request.query,
//        queryString:ctx.request.querystring
//    }
// })
// app.listen(3000,() =>{
//     console.log('server is running in http://localhost:3000')
// })
// const koa = require('koa');
// const app =new koa();
// const {sign} = require('jsonwebtoken')
// const secret = 'demo';
// const jwt = require('koa-jwt')({secret});

// router
//       .post('/api/login',async (ctx,next) =>{
//       const user = ctx.response.body;
//         if (user && username) {
//                 let {username} =user;
//         const token = sign({username},secret, {expiresIn:'1h'});
//         ctx.body={
//                 message:'GET Token Success',
//                 code:1,
//                 token
//         };
//         } else{
//                 ctx.body ={
//                         message:'Param Error',
//                         code:-1,
//                 }
//         }
//       })
//       .get('/api/userInfo',jwt, async ctx =>{
//               ctx.body = {username: ctx.state.user.username};
//       })
//       .get('/api/adminInfo',jwt ,admin, async ctx =>{
//               ctx.body= {username:ctx.state.username}
//       })

//       app.listen(3000);
/**
 * 16
 */
// const koa = require('koa');
// const Router  =require('koa-router');
// const app =new koa();

// const router= new Router({
//         prefix:'/users'
// })

// router.get('/',async(ctx,next)=>{
//         ctx.response.body='<h1>response to /users</h1>'
// })
// router.get('/:pid',async(ctx,next)=>{
//         ctx.response.body='<h1>response to /users/:id</h1>'
// })


// app.use(router.routes())
// app.listen(3000);

/**
 * 15
 */
// const koa = require('koa');
// const router  =require('koa-router');
// const app =new koa();

// const forums =new router();
// const posts  =new router();

// posts.get('/',async(ctx,next)=>{
//         ctx.response.body='<h1>response to /forums/123/posts</h1>'
// })
// posts.get('/:pid',async(ctx,next)=>{
//         ctx.response.body='<h1>response to /forums/123/posts/123</h1>'
// })
// forums.use('/forums/:fid/posts',posts.routes(),posts.allowedMethods())

// app.use(forums.routes())
// app.listen(3000);
/**
 * 14
 */
// const koa = require('koa')
// const router =require('koa-router')();
// const app = new koa();

// router.get(
//         '/users/:id',
//         async (ctx,next)=>{
//                 ctx.response.body='<h1>user page</h1>';
//                 ctx.user={id:3, name:'xiaoming'}
//                 await next();
//         },
//         async (ctx) =>{
//                 console.log(ctx.user)
//         }
// )
//     app.use(router.routes());
//     app.listen(3000);
/**
 *13 
 */
// const Koa = require('koa');
// const router = require('koa-router')();
// const app =new Koa();

// router.get('/',async(ctx,next) =>{
//         ctx.response.body='<h1>index page<h1>'
//         await next();
// })
// router.all('/',async(ctx,next) =>{
//         console.log('match "all" method')
//         await next();
// })
// app.use(router.routes());

// app.listen(3000)

/**
 * 12
 */
// const koa = require('koa');
// const Router =require('koa-router')
// const app = new koa();

// const router = new Router();
// router
//       .get('/', async (ctx,next) =>{
//               ctx.body='hello world';
//       })
//       .post('/users', async (ctx,next) =>{
//               //增加用户
//       })
//       .put('/users/:id',async (ctx,next) =>{
//               //修改对应Id用户信息
//       })
//       .del('/user/:id', async (ctx,next) =>{
//               //删除对应ID用户信息
//       })
//       .all('/users/:id', async(ctx,next) =>{
//               //...
//       })
//       app.use(router.routes())
//       app.listen(3000)

/**
 * 11
 */
// const koa = require('koa');
// const app = new koa();
// app.use(async (ctx,next) =>{
//      const{ url,method}=ctx;
//      if(url ==='/404' && method ==='GET'){
//         ctx.body = 'Page Not Found';
//         ctx.status = 404;
//      }else {
//              ctx.body = 'Default Content';
//      }
//      await next()
// })

// app.listen(3000);
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
// ctx.response.redirect(url,[alt])
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
/**
 * 1
 */
const koa = reuqire('koa');
const app =new koa();
const session = require('koa-session');
      app.keys =['some secret hurr'];
      const CONFIG ={
          key:'myAppSessKey',
          maxAge: 8600000,
          overwrite:true,
          httpOnly: true,
          signed: true
      }
      app.use(session(CONFIG,app));
      app.use(ctx =>{
          if(ctx.path ==='/favicon.ico')
          return;
          let  n= ctx.session.views || 0;
          ctx.session.views = ++n;
          ctx.body =n+ 'views'
      })
      app.listen(3000);
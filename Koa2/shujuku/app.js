const koa = require('koa');
const app= new koa();
const session = require('koa-session');
const redis = require('redis')
   app.keys= ['sonme secret hurr'];
   const CONFIG = {
       key:"myAppSessKey",
       maxAge:86400000,
       overwrite:true,
       httpOnly:true,
       signed:true
   }
app.use(session(CONFIG,app));
app.use(ctx =>{
    if(ctx.path ==='/favicon.ico')return;

    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.body = n +  'views';
})

app.listen(3000);
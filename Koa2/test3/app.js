const koa = require('koa');
const Router =require('koa-router');
const path = require('path')
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const app =new koa();
const router = new Router();

app.use(serve(path.join(__dirname)));
app.use(bodyParser());

router.get('/',async (ctx,next) =>{
    ctx.body= 
    '<link rel="stylesheet" href="index.css"/>'+
    '<div class="sign-up">'+
    '<h3>注册</h3>'+
    '<form method="post">'+
    '<input type="text" name="name" placeholder="账号" required>' +
    '<input type="email" name="email" placeholder="邮箱" required>'+
    '<input type= "password" name="password" placeholder="密码" required>'+
    '<input type= "password" name="confirm_password" placeholder="确定密码" required>'+
    '<input type="submit" value="注册">'+
    '</form>'+
    '</div>'
});

router.post('/',async (ctx,next)=>{

    let{ name,email,password,confirm_password}= ctx.request.body;
    let arr =[
        '<link rel="stylesheet" href="index.css"/>',
        '<div class = "result">',
        '<h3>注册成功</h3>',
        '<p>账号:' + name +"</p>",
        '<p>邮箱:' + email +"</p>",
        '<p>密码:' + password +"</p>",
        '<p>确定密码:' + confirm_password +"</p>",
        '</div>'
    ]
    ctx.body=arr.join('')
})

app.use(router.routes());
app.listen(3000,()=>{
    console.log('Server is running ')
})
const router = require('koa-router')();
const userModel = require('../lib/mysql.js')
const moment = require('moment')
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin;
const md = require('markdown-it')();  

router.get('/',async(ctx,next) =>{
    ctx.redirect('/posts')
})
//文章页
router.get('/posts',async(ctx,next) =>{
    let res,
    postsLength,
    name =decodeURIComponent(ctx.request.querystring.spilt('=')[1]);
    if(ctx.request.querystring){
        console.log('ctx.request.querystring',name)
        await userModel.findDataByUser(name)
        .then(result =>{
            res=result
        })
        await ctx.render('selfPosts',{
            session:ctx.session,
            posts:res,
            postsPageLength:Math.ceil(postsLength / 10),
        })
    }else{
        await userModel.findPostByPage(1)
        .then(result =>{
            res=result
        })
        await userModel.findAllPost
    }
})
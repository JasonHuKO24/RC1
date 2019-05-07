module.exports={
    index: async(ctx,next)=>{
        ctx.response.body = '<h1>index page</h1>';
    },
    home: async (ctx,next) =>{
        console.log(ctx.request.query);
        console.log(ctx.request.querystring);
    },
    homeParmas: async (ctx,next) =>{
        console.log(ctx.parmas);
        ctx.response.body ='<h1>HOME page</h1>'
    },
    user: async (ctx,next) =>{
        `
    <form action="/user/register" method='post'>
    <input name="name" type="text" placeholder="输入用户名:jasonhu" />
    <br/>
    <input name="password" type="text" placeholder="输入密码:123456" />
    <br/>
    <button>sumbit</button>
    </form>
    `
    },
    login: async()
}
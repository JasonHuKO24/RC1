const HomeService = require('../service/home')
module.exports={
    index: async function (ctx, next) {
        await ctx.render("home/index", {title: "iKcamp欢迎您"})
      },
    home: async (ctx,next) =>{
        ctx.send({status:'200'})
        // ctx.response.body="<h1>HOME page</h1>"
    },
    homeParmas: async (ctx,next) =>{
        console.log(ctx.parmas);
        ctx.response.body ='<h1>HOME page</h1>'
    },
    login: async (ctx,next) =>{
      await ctx.render('home/login',{
          btnName:'GoGoGo'
      })
    },
    register: async function (ctx, next){
        let params = ctx.request.body
        let name = params.name
        let password = params.password
        let res = await HomeService.register(name,password) 
        if(res.status == "-1"){
          await ctx.render("home/login", res.data)
        }else{
          ctx.state.title = "个人中心"
          await ctx.render("home/success", res.data)
        }
      }
}
//router.js:注册项目中所有的路由
//middleware:集中管理项目中用到的所有中间件,包括定自定义的中间件
//controller：路由请求对应的处理函数
//service: 提供controller逻辑中需要用到的底层数据
//views 集中管理所有的视图模板文件.
//public：集中管理所有的静态文件
//app ：项目入口文件;

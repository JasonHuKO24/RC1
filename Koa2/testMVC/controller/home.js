const HomeService = require('../service/home')
module.exports={
    index: async function (ctx, next) {
        await ctx.render("home/index", {title: "iKcamp欢迎您"})
      },
    home: async (ctx,next) =>{
        ctx.send({status:200})
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
const koa =require('koa');
const path = require('path')

const app = new koa();
const router = require('./router')
const middleware = require('./middleware')


middleware(app)
router(app)

app.listen(3000 ,() =>{
    console.log('server is running')
});

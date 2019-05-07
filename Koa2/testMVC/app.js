const koa =require('koa');
const bodyparser =require('koa-bodyparser');
const app = new koa();
const router = require('koa-router');

app.use(bodyparser());
router(app);

app.listen(3000);
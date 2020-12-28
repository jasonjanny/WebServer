const Koa  = require('koa')
const serve = require('koa-static');

const app = new Koa();
app.use(serve(__dirname + "/public")); //将public下的代码静态化
app.listen(9527, () => {
     console.log('人资项目启动')
})
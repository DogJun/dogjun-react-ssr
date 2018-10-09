require("babel-polyfill")
import Koa from 'koa'
import path from 'path'
import staticServer from 'koa-static'
import Router from 'koa-router'
import { render } from './utils'
import routes from '../Routes' 

const app = new Koa()
const router = new Router()

router.get('*', (ctx) => {
  ctx.body = render(ctx.request, routes)
})

app
  .use(router.routes())
  .use(router.allowedMethods())

// 静态资源
// app.use(staticServer(path.join(__dirname, '../..', 'public')))

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
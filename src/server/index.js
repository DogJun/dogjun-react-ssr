require("babel-polyfill")
import Koa from 'koa'
import staticServer from 'koa-static'
import Router from 'koa-router'
import { render } from './utils'
import routes from '../Routes' 
import { matchRoutes } from 'react-router-config'
import { getServerStore } from '../store'
import proxy from 'koa2-simple-proxy'

const app = new Koa()
const router = new Router()

// 静态资源
app.use(staticServer('public'))

// 转发
app.use(proxy('/api', 'http://47.95.113.63/ssr/api'));

router.get('*', async (ctx) => {
  const store = getServerStore(ctx.request)
  const promises = []
  // store中填充什么数据根据当前路由去加载
  const matchedRoutes = matchRoutes(routes, ctx.request.url)
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  await Promise.all(promises)
  const context = {
    css: []
  }
  const html = render(ctx.request, store, routes, context)
  if (context.action === 'REPLACE') {
    ctx.status = 301
    ctx.redirect(context.url)
  } else if (context.notFound) {
    ctx.status = 404
    ctx.body = html
  } else {
    ctx.body = html
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8080, () => {
  console.log('server is running at http://localhost:8080')
})
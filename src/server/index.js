require("babel-polyfill")
import Koa from 'koa'
import staticServer from 'koa-static'
import Router from 'koa-router'
import { render } from './utils'
import routes from '../Routes' 
import { matchRoutes } from 'react-router-config'
import { getServerStore } from '../store'


const app = new Koa()
const router = new Router()

// 静态资源
app.use(staticServer('public'))

router.get('*', async (ctx) => {
  const store = getServerStore()
  const promises = []
  // store中填充什么数据根据当前路由去加载
  const matchedRoutes = matchRoutes(routes, ctx.request.url)
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  await Promise.all(promises)
  ctx.body = render(ctx.request, store, routes)
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
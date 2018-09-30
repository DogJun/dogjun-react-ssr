require("babel-polyfill")
import Koa from 'koa'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import path from 'path'
import staticServer from 'koa-static'
import Home from '../containers/home'

const app = new Koa()
const content = ReactDOMServer.renderToString(<Home/>)
app.use(async ctx => {
  ctx.body = `
    <html>
      <head>
        <title>react ssr</title>
      </head>
      <body>
        ${content}        
      </body>
      <script src="/public/index.js"></script>
    </html>
  `
})

// 静态资源
app.use(staticServer(path.join(__dirname, '../..', 'public')))

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { getServerStore } from '../store'

export const render = (req, routes) => {
  const content = ReactDOMServer.renderToString((
    <Provider store={getServerStore()}>
      <StaticRouter location={req.url} context={{}}>
        <div>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
  ))
  return `
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `
}
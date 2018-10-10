import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

export const render = (req, store, routes) => {
  const content = ReactDOMServer.renderToString((
    <Provider store={store}>
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
      <script >
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src="/index.js"></script>
    </html>
  `
}
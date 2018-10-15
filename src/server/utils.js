import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { Helmet } from "react-helmet"

export const render = (req, store, routes, context) => {
  const content = ReactDOMServer.renderToString((
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <div>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
  ))
  const helmet = Helmet.renderStatic()
  const style = context.css.length ? context.css.join('\n') : ''
  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <style>${style}</style>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src="/index.js"></script>
    </html>
  `
}
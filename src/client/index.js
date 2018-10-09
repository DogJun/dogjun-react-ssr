import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import routes from '../Routes'

const App = () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <div>
        {renderRoutes(routes)}
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDom.hydrate(<App/>, document.getElementById('root'))
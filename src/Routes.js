import App from './App'
import Home from './containers/Home'
import Login from './containers/Login'

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '/login',
        component: Login
      }
    ]
  }
]
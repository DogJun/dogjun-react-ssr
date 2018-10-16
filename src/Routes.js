import App from './App'
// import Loadable from 'react-loadable'
// import Loading from './components/Loading'
import Home from './containers/Home'
import Translation from './containers/Translation'
import NotFound from './containers/NotFound'
export default [
  {
    path: '/',
    // component: Loadable({
    //   loader: () => import(/* webpackChunkName: 'App'*/'./App'),
    //   loading: Loading,
    // }),
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        // component: Loadable({
        //   loader: () => import(/* webpackChunkName: 'Home'*/'./containers/Home'),
        //   loading: Loading,
        // }),
        component: Home,
        exact: true,
        loadData: Home.loadData
      },
      {
        path: '/translation',
        // component: Loadable({
        //   loader: () => import(/* webpackChunkName: 'Translation'*/'./containers/Translation'),
        //   loading: Loading,
        // }),
        component: Translation,
        loadData: Translation.loadData
      },
      {
        // component: Loadable({
        //   loader: () => import(/* webpackChunkName: 'NotFound'*/'./containers/NotFound'),
        //   loading: Loading,
        // })
        component: NotFound
      }
    ]
  }
]
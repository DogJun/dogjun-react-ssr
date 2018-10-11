import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer } from '../containers/Home/store'
import { headerReducer } from '../components/Header/store'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
})


export const getServerStore = (req) => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
}

export const getClientStore = () => {
  // 取到服务端渲染的store，作为初始值，保证服务端渲染和客户端渲染的store一致
  const defaultStore = window.context.state
  return createStore(reducer, defaultStore, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}

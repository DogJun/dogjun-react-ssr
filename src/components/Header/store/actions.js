import * as actionsType from './constants'
export const changeLogin = (value) => ({
  type: actionsType.CHANGE_LOGIN,
  value
})

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login.json?secret=D37msjPeC3')
      .then(() => {
        dispatch(changeLogin(true))
      })
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout.json?secret=D37msjPeC3')
      .then(res => {
        dispatch(changeLogin(false))
      })
  }
}

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json?secret=D37msjPeC3')
      .then(res => {
        console.log('isLogin', res.data.data)
        dispatch(changeLogin(res.data.data.login))
      })
  }
}
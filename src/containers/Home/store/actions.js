import * as actionsType from './constants'

const changeList = list => ({
  type: actionsType.CHANGE_LIST,
  list
})

export const fetchHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json?secret=D37msjPeC3')
      .then(res => {
        dispatch(changeList(res.data.data))
      })
  }
}
import * as actionTypes from './constants'

const changeList = list => ({
  type: actionTypes.CHANGE_LIST,
  list
})

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations.json')
      .then(res => {
        if (res.data.success) {
          dispatch(changeList(res.data.data))
        } else {
          dispatch(changeList([]))
        }
      })
  }
}
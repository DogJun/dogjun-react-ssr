import axios from 'axios'


const instance = (req) => axios.create({
  baseURL: 'http://47.95.113.63/ssr/',
  // 带上客户端传过来的cookie
  headers: {
    cookie: req.get('cookie') || ''
  }
})

export default instance
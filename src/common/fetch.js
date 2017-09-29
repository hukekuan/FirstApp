/**
 * Created by hukekuan on 2017/9/29.
 */
import axios from 'axios'
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  //baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
})

service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    //return Promise.reject(error)
  }
)
export default service

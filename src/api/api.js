import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

axios.defaults.timeout = 15000;
axios.defaults.withCredentials = true; // cookie访问
let local = sessionStorage.getItem('localhost') || window.location.origin;

axios.interceptors.request.use(config => {
  return config
}, err => {
  Message.error({ message: '请求超时!' })
  return Promise.resolve(err)
})

axios.interceptors.response.use(data => {
  if (data.status && data.status == 200 && data.data.status == 'error') {
    Message.error({ message: data.data.msg })
    return
  }
  return data
}, err => {
  // Message.error({message: err});
  if (err.response.status == 504 || err.response.status == 404) {
    window.location.href = local + '/gic-web/#/login'
    // Message.error({message: '服务异常⊙﹏⊙∥'});
  } else if (err.response.status == 403) {
    window.location.href = local + '/gic-web/#/login'
    // Message.error({message: '权限不足,请联系管理员!'});
  } else {
    window.location.href = local + '/gic-web/#/login'
    // Message.error({message: '未知错误!'});
  }
  return Promise.resolve(err)
})


const base = local + '/gicweb/cloudweb/'
const timeout = 15000
const token = ''// sessionStorage.getItem('user');

/*
 *
 * 统一 get 请求方法
 * @url: 请求的 url
 * @params: 请求带的参数
 * @header: 带 token
 *
 */

export const getRequest = (url, params) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    data: {},
    params: params,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }// "token": token
  })
}

/*
 *
 * 统一 post 请求方法
 * url: 请求的 url
 * @params: 请求带的参数
 * @header: 带 token
 *
 */

export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: qs.stringify(params),
    headers: { 'content-type': 'application/x-www-form-urlencoded' } // multipart/form-data{"token": token}
  })
}

/**
 * post excel
 */

export const postExcel = (url, params) => {
  params.requestProject = 'haoban-manage-web'
  return axios({
    method: 'post',
    url: `${local}${url}`,
    data: qs.stringify(params),
    responseType: 'blob',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    } // multipart/form-data{"token": token}
  })
}


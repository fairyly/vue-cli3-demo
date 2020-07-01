
/* 后台返回消息提示 */
import { Message } from 'element-ui'

// 后台返回异常提示

export default {
  errorMsg: function(response) {
    var local = sessionStorage.getItem('localhost')
    if (response.errcode != 1) {
      if (response.errcode == 4) {
        window.location.href = local + '/gic-web/#/login'
        return false
      }
      Message.error({
        duration: 1000,
        message: response.errmsg
      })
    }
  }
}

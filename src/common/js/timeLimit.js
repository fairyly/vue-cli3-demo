/**
 *
 * 00:00-05:00时间控制
 *
 */
export default {
  timeLimit: function() {
    let returnFlag = true
    const date = new Date()
    const h = parseInt(date.getHours())
    const m = parseInt(date.getMinutes())
    const s = parseInt(date.getSeconds())
    if (h >= 0 && h < 5) {
      returnFlag = false
    }
    return returnFlag
  }
}

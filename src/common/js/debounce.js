// 防抖
export function debounce(fn, delays) {
  const delay = delays || 200
  let timer
  return function() {
    const that = this
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      timer = null
      fn.apply(that, args)
    }, delay)
  }
}

/**
 *  千位分割
 */
export function formatNum(num) {
  const number = num.toString().split('.') // 分隔小数点
  const dot = '0.' + (number[1] || 0)
  var reg = /\d{1,3}(?=(\d{3})+$)/g
  return (
    (number[0] + '').replace(reg, '$&,') +
    '.' +
    Number(dot)
      .toFixed(2)
      .toString()
      .split('.')[1]
  )
}

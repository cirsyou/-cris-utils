import url from 'url'

/**
 * 格式化请求链接参数
 * @param {*} _url 
 */
export function formateQuery(_url) {
  _url = _url || window.location.href
  return url.parse(_url, true).query
}

/**
 * 格式化时间
 */
// export function formateTime(_time, type) {
//   _time = _time|| new Date().getTime()
//   return _time
// }

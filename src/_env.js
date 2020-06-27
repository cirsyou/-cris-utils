/**
 * 判断是否为安卓机型
 */
export function isAndroid() {
  let _ua = window.navigator.userAgent.toLocaleLowerCase()
  if (_ua.indexOf('android') > -1 || _ua.indexOf('adr') > -1) {
    return true
  } else {
    return false
  }
}

/**
 * 判断是否为ios机型
 */
export function isIos() {
  let _ua = window.navigator.userAgent
  if (!!_ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return true
  } else {
    return false
  }
}

/**
 * 判断是否为正确的邮箱地址
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Utils = factory());
}(this, (function () { 'use strict';

  /**
   * 判断是否为安卓机型
   */
  function isAndroid() {
    var _ua = window.navigator.userAgent.toLocaleLowerCase();

    if (_ua.indexOf('android') > -1 || _ua.indexOf('adr') > -1) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * 判断是否为ios机型
   */

  function isIos() {
    var _ua = window.navigator.userAgent;

    if (!!_ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * 判断是否为正确的邮箱地址
   */

  /**
   * 格式化请求链接参数
   * @param {*} _url 
   */
  function formateQuery(_url) {
    var obj = {};
    var url;

    if (_url) {
      // 传入了url
      url = _url;
      obj.param = {};

      try {
        obj.query = url.split('?')[1];
        obj.query.split('&').forEach(function (v) {
          if (v) {
            var temp = v.split('=');
            obj.param[temp[0]] = temp[1];
          }
        });
      } catch (err) {}

      return obj && obj.param;
    } else {
      // 未传入url时
      url = window.location;
      obj.hash = url.hash.replace('#', '');
      obj.param = {};
      url.search.slice(1).split('&').forEach(function (v) {
        if (v) {
          var temp = v.split('=');
          obj.param[temp[0]] = temp[1];
        }
      });
      return obj && obj.param;
    }
  }
  /**
   * 时间戳 格式化时间
   * @param {number} _time 需要格式化的时间戳,默认为当前时间戳
   * @param {string} dType 格式化之后的输出日期类型，如 ‘YYYY-MM-DD h:m:s’，格式化之后为2020-07-04 4:30:13
   */

  function formatDate(_time, dType) {
    if (_time && typeof _time === "string") {
      _time = Number(_time);
    }

    _time = _time || new Date().getTime();
    _time = new Date(_time); // 解析类型

    var dunit = '-';
    var munit = ':';
    var dformate = false; // 是否对小于10的月份或日期加‘0’

    var mformate = false; // 是否对小于10的时间加‘0’

    var hasSecond = false; // 是否需要显示s

    if (dType) {
      try {
        var _dType = dType.split(' ')[0];
        var _mType = dType.split(' ')[1];

        if (_dType) {
          // 处理单位
          dunit = _dType.slice(4, 5); // 需要处理小于10的数字

          if (_dType.length > 8) {
            dformate = true;
          }
        }

        if (_mType) {
          var _items = _mType.split(':'); // 需要显示秒


          if (_items.length > 2) {
            hasSecond = true;

            if (_mType.length > 5) {
              mformate = true;
            }
          } else {
            hasSecond = false;

            if (_mType.length > 3) {
              mformate = true;
            }
          }
        }
      } catch (err) {}
    } // 年月日


    var year = _time.getFullYear();

    var month = _time.getMonth() + 1;

    if (dformate) {
      month = month < 10 ? '0' + month : month;
    }

    var date = _time.getDate();

    if (dformate) {
      date = date < 10 ? '0' + date : date;
    } // 时分秒


    var hour = _time.getHours();

    if (mformate) {
      hour = hour < 10 ? '0' + hour : hour;
    }

    var minute = _time.getMinutes();

    if (mformate) {
      minute = minute < 10 ? '0' + minute : minute;
    }

    var second = _time.getSeconds();

    if (mformate) {
      second = second < 10 ? '0' + second : second;
    } // 是否有s


    if (hasSecond) {
      return year + dunit + month + dunit + date + " " + hour + munit + minute + munit + second;
    } else {
      return year + dunit + month + dunit + date + " " + hour + munit + minute;
    }
  }

  var main = {
    isAndroid: isAndroid(),
    isIOS: isIos(),
    formateUrl: formateQuery,
    formatDate: formatDate
  };

  return main;

})));

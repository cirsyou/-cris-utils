### 前端开发常用方法库

#### 安装方式
```js
npm install cris-utils --save
```

#### 引入方式
```js
import _Utils from 'cris-utils'
```

#### 判断是否为安卓机型
```js

let isAndroid = _Utils.isAndroid 
console.log(isAndroid) // true 为在安卓机型中，false 为不在安卓机型中

```

#### 判断是否为IOS机型
```js

let isIOS = _Utils.isIOS
console.log(isIOS) // true 为在ios机型中，false 为不在ios机型中

```

#### 处理url链接参数，并以对象形式返回
```js

let _url = "https://www.baidu.com/?name=zhangsan&age=12"
let _query = _Utils.formateUrl(_url) // _url参数不传的时候，默认取当前访问的链接地址
console.log(_query) // {"name":"zhangsan","age":"12"}

```

#### 将时间戳序列化时间字符串
```js
let _time
_time = _Utils.formateUrl('1593867729494','YYYY/MM/DD hh:mm:ss') // "2020/07/04 21:02:09"
_time = _Utils.formateUrl('1593867729494','YYYY-MM-DD hh:mm:ss') // "2020-07-04 21:02:09"
_time = _Utils.formateUrl('1593867729494','YYYY-M-D hh:mm:ss') // "2020-7-4 21:02:09"
_time = _Utils.formateUrl('1593867729494','YYYY-MM-DD h:m:s') // "2020-07-04 21:2:9"
_time = _Utils.formateUrl('1593867729494','YYYY-MM-DD h:m') // "2020-07-04 21:2"
_time = _Utils.formateUrl('1593867729494','YYYY-MM-DD hh:mm') // "2020-07-04 21:02"
```
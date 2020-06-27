const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    globalObject: 'this',
    umdNamedDefine: true,
    libraryExport: 'default',
    library: 'Utils', // 暴露Utils：增加全局变量Utils，通过script标签引入js，并通过Utils全局变量使用
    libraryTarget: 'umd' // //控制以不同形式暴露library，umd：AMD、commonjs、ES import等任何方式都可以引入，this:将上面的全局变量挂载到this上，window同理，node下是global
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  }
}
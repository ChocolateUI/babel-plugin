const pluginTester = require('babel-plugin-tester').default
const myPlugin = require('./plugins/exchange_url.js')
const path = require('path')

pluginTester({
  plugin: myPlugin,
  pluginName: 'exchange-url-plugins',
  // 默认插件名
  title: 'exchange-url-plugins',
  // 传递给插件的 options，详见：https://babeljs.io/docs/en/plugins/#plugin-options
  pluginOptions: {
    optionA: true,
  },
  // 使用 jest 的 snapshot
  snapshot: true,
  // 读取的目录
  fixtures: path.join(__dirname, 'test/__fixtures__'),
})
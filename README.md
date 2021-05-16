# babel-plugin

#### 🍄 运行

- `yarn test`

- `npm run test`

#### 🌵 查看代码覆盖率

- `yarn test-cov`

- `nom run test-cov`

##### 🌴 插件一

1. 替换`url`中的环境变量

```js
const a = `https://edu-activity.cn/activity?fe_env=e`;

转换为

const a = `https://edu-activity.cn/activity`;
```

##### 🌲 插件二

2. 为代码加入异常捕获

```js
function sum(a, b){
  return a+b+c;
}

转换为

(function sum(a, b) {
  try {
    return a + b + c;
  } catch (error) {
    console.log(error);
  }
});
```

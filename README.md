# BaseWebpack

## 项目说明
这个项目主要搭建基础的webpack开发环境。  
包含的基础信息：  
- webpack-dev-server
- cross-env
- css-loader
- url-loader
- babel
- stylus
- jsx
- html-webpack-plugin
- postcss-loader
- vue


## 初始化webpack
```shell
  ./init
```

## 安装依赖
```shell
npm install --save-dev webpack-dev-server cross-env html-webpack-plugin
```
## 配置package.json
在"scripts"添加"build"与"dev"脚本，结果如下：
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
  "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"
}
```

## 运行
```shell
./run
```
## 编译
```shell
./build
```

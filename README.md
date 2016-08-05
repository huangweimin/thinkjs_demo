
Application created by [ThinkJS](http://www.thinkjs.org)

NodeJs 开发企业站点

## 安装依赖

```
项目安装后，进入项目目录，执行 npm install 安装依赖，也可以使用 taobao 源进行安装。
npm install 或者
npm install --registry=https://registry.npm.taobao.org --verbose
```

## 开启服务

```
npm start
```

## 浏览地址

```
http://127.0.0.1:8360/
```

## Deploy with pm2(扩展)

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```
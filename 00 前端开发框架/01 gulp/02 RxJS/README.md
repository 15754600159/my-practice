# 前端Web模板工程 #


## 安装 ##

1.  安装[nodejs](https://nodejs.org/download/)

2.  设置 npm registry

    `npm config set registry https://registry.npm.taobao.org`

3.  安装插件。在工程根目录下运行:

    `npm install`


## 代理配置 ##

1.  在工程根目录下拷贝settings.default.json，重命名为settings.json

2.  将settings.json中"httpProxy"或"wsProxy"里的"server"修改为后端服务器的地址


## 模块配置 ##

增加或删除脚本和样式文件后，需要在modules.json中配置对应的js，css, less或scss文件


## 模拟后台数据 ##

1.  进入工程的server目录，运行`npm install`

2.  在server/data目录下创建模拟数据的json文件，如果数据请求路径为/api/test, 则json文件名称为api.test.json

3.  在server/file目录下放入静态文件，请求路径为/file/<文件名>

4.  运行`npm run server`来启动服务，访问地址前缀为http://localhost:8000/

## 代码编辑 ##

*   css, less, scss文件格式化(包括属性排序)

    1. `Ctrl + shift + s` -> 代码属性排序(格式有些问题)
    2. `右键 格式化代码` -> 代码格式调整
    
*   格式化代码

    `npm run format`

*   JavaScript代码检查

    `npm run lint`


## 运行 ##

*   开发(启动浏览器调试)

    `npm run dev`

*   启动后台服务(模拟后台提供数据)

    `npm run server`

*   生成发布包

    `npm run release`

## 文件目录结构 ##

├─.vscode ==vscode 配置文件==
├─dist ==调试环境打包目录==
├─server ==前端自测调试接口==
│  ├─data ==json数据==
│  └─file ==请求文吉安==
└─src ==源码==
    ├─css ==CSS公共库==
    ├─images ==图片资源==
    ├─js ==JS文件==
    │  ├─app ==js逻辑代码==
    │  │  └─api ==统一接口管理文件==
    │  └─libs ==js公共库==
    ├─less ==less文件 具体规范参照[最佳实践NEC](http://nec.netease.com/)==
    │  ├─app ==此项目自定义样式文件==
    │  │  ├─components ==项目公共组件样式==
    │  │  └─pages ==具体页面样式==
    │  └─common ==项目共享样式文件==
    ├─pages ==html文件==
    │  └─common ==复用html代码==
    └─scss ==sass文件==

## 小框架介绍 ##
1. 思路: 
    1. RxJS控制事件流 -> 数据state -> 渲染(对象数据源需要自己的render函数)；
    2. state的更新diff用immutable来比较数据是否不变化，提升性能；

2. 使用方法: 
    1. 在一个页面对象中(例如app.login.js), 定义属性state(页面状态管理)、observables(观察者对象数组)；
    2. 再html容器中，定义属性data-bind="key"来绑定state中的相关数据；
    3. 若绑定数据不是基本类型，则需要在事件对象中自定义渲染函数`${key}Render`；
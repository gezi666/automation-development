# 基于Gulp的前端开发模版






**项目运行**
```javascript
$ git clone https://github.com/ws880321/automation-development.git

$ cd automation-development

$ npm install


$ npm run dev //用于开发环境


$ npm run build //用于生产环境
```


## 搭建开发环境


### 安装必要的开发工具包

   +  "babel-core": "^6.26.0",
      +  babel-core 的作用是把 js 代码分析成 ast ，方便各个插件分析语法进行相应的处理。
   +  "babel-preset-env": "^1.6.1",
      +  babel-preset-env可以根据配置的目标运行环境（environment）自动启用需要的 babel 插件
   +  "browser-sync": "^2.18.13",
      +  BrowserSync能让浏览器实时、快速响应您的文件(html、js、css、sass、less等等)的更改
   +  "del": "^3.0.0",
      +  文件的删除操作
   +  "gulp": "^3.9.1",
      +  用自动化构建工具增强你的工作流程！
   +  "gulp-babel": "^7.0.0",
      +  gulp-babel用于es6的语法转化
   +  "gulp-changed": "^3.1.1",
      +  使用 gulp-changed 可以只让更改过的文件传递过管道。
   +  "gulp-concat": "^2.6.1",
      +   使用 gulp-concat  用于文件合并
   +  "gulp-html-extend": "^1.1.6",
      +  可以轻松扩展，包含和替换您的html文件
   +  "gulp-if": "^2.0.2",
      +  可以利用条件判断
   +  "gulp-imagemin": "^3.4.0",
      +  用于图片压缩
   +  "gulp-less": "^3.3.2",
      +  用将less转化成css
   +  "gulp-load-plugins": "^1.5.0",
      +  使用gulp-load-plugins模块，可以加载package.json文件中所有的gulp模块
   +  "gulp-minify-css": "^1.2.4",
      +  压缩css
   +  "gulp-minify-html": "^1.0.6",
      +  压缩html
   +  "gulp-order": "^1.1.1",
      +  文件合并的排序
   +  "gulp-plumber": "^1.1.0",
      +  gulp的错误捕获
   +  "gulp-rev": "^8.1.0",
      +  根据静态资源内容，生成md5签名，打包出来的文件名会加上md5签名
   +  "gulp-sass": "^3.1.0",
      + 将scss  转化为css
   +  "gulp-uglify": "^3.0.0",
      + js压缩
   +  "uglify-js": "^3.1.8"






你可以在npm的网站上找到相应插件的gulp配置写法



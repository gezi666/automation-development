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
-   babel-preset-es2015
-   babelify
-   browser-sync     省时的浏览器同步测试工具
-   browserify
-   gulp             用自动化构建工具增强你的工作流程！
-   gulp-cache
-   gulp-changed     通过使用 gulp-changed 可以只让更改过的文件传递过管道。这可以大大加快连续多次的运行
-   gulp-clean
-   gulp-concat      使用gulp-concat合并文件,减少网络请求
-   imagemin-pngquant使用imagemin-pngquant压缩图片文件(包括PNG、JPEG、GIF和SVG图片)
-   gulp-less        使用gulp-less插件将less文件编译成css
-   gulp-minify-css  使用gulp-minify-css压缩css文件,减小文件大小
-   gulp-minify-html 使用gulp-minify-html 用来压缩html文件
-   gulp-order       使用gulp-ordert合并文件时,进行排序
-   gulp-plumber     使用gulp-plumber来捕获处理任务中的错误
-   gulp-uglify      使用gulp-uglify压缩javascript文件,减小文件大小
-   

```javascript
npm install gulp gulp-browserify gulp-concat gulp-react gulp-connect lodash reactify --save-dev
```



### 写入gulp配置文件gulpfile.js

你可以在npm的网站上找到相应插件的gulp配置写法。我配置的[gulpfile.js](https://github.com/tsrot/)



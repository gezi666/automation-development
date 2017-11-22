# 基于Gulp的前端开发模版






**项目运行**
```javascript
$ git clone https://github.com/ws880321/automation-development.git

$ cd automation-development

$ npm install


$ npm run dev //用于开发环境


$ npm run build //用于生产环境
```

### 项目目录结构

```
.
├─ build/               # gulp 任务配置目录
├─ dist/                # build 生成的生产环境下的项目
├─ src/                 # 源码目录（开发都在这里进行）
│   ├── components/     # 组件（COMPONENT）
│   ├── html/           # 页面级html
│   ├── css/            # css文件存放目录（less ,scss,css）
│   ├── js/             # js文件存放目录
│   ├── images/         # 图片文件
├── .babelrc            # Babel 转码配置
├── .gitignore          # （配置）需被 Git 忽略的文件（夹）
├── gulpfile.js         #   gulpfile基础配置文件
├── package.json        # （这个就不用多解释了吧）
```


### 安装必要的开发工具包
```
   babel-core         # babel-core 的作用是把 js 代码分析成 ast 方便各个插件分析语法进行相应的处理。
   babel-preset-env   # babel-preset-env可以根据配置的目标运行环境自动启用需要的 babel 插件
   browser-sync       # BrowserSync能让浏览器实时、快速响应您的文件的更改
   del                # 文件的删除操作
   gulp               # 用自动化构建工具增强你的工作流程！
   gulp-babel         # gulp-babel用于es6的语法转化
   gulp-changed       # 使用 gulp-changed 可以只让更改过的文件传递过管道。
   gulp-concat        # 使用 gulp-concat  用于文件合并
   gulp-html-extend   # 可以轻松扩展，包含和替换您的html文件
   gulp-if            # 可以利用条件判断
   gulp-imagemin      # 用于图片压缩
   gulp-less          # 用将less转化成css
   gulp-load-plugins  # 使用gulp-load-plugins模块，可以加载package.json文件中所有的gulp模块
   gulp-minify-css    # 压缩css
   gulp-minify-html   # 压缩html
   gulp-order         # 文件合并的排序
   gulp-plumber       # gulp的错误捕获
   gulp-rev           # 根据静态资源内容，生成md5签名，打包出来的文件名会加上md5签名
   gulp-sass          # 将scss  转化为css
   gulp-uglify        # js压缩
   uglify-js
```

### 已配置的任务
   + scripts  js处理支持es6
   + less     less转化和压缩
   + html     html的公共组件引入和压缩
   + img      图片的压缩
   + concatjs js合并处理
   
   > 如果需求不能满足您也可以在npm的网站上找到相应插件的gulp配置写法
   

   ### <a name="reference">&sect; 参考</a>
* [npmjs](https://www.npmjs.com/)
* [gulpjs](http://www.gulpjs.com.cn/)
* [babel](https://babeljs.cn/)






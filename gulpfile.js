var gulp = require('gulp');
var bro = require('gulp-bro'),
    concat = require('gulp-concat'),
    babelify = require('babelify'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css'),
    minifyHtml = require("gulp-minify-html"),
    watch = require('gulp-watch'),
    include = require('gulp-file-include'),
    imageminify = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    babel = require('gulp-babel'),
    es2015 = require('babel-preset-es2015'),
    babelCore = require('babel-core'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('scripts', function() {
    return gulp.src(['./src/js/*/**.js'])
        .pipe(bro({
            transform: [
                babelify.configure({ presets: ['es2015'] })
            ]
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(reload({ stream: true }))
});


/*js copy*/
gulp.task('copy', function() {
    return gulp.src(['./src/js/lib/*/*.js'])
        .pipe(gulp.dest('./dist/js/lib'))
        .pipe(reload({ stream: true }));
});


/*less编译*/
gulp.task('less', function() {
    return gulp.src('./src/css/*/*.less')
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({ stream: true }));
});

/*html头尾部件复用*/
gulp.task('fileinclude', function() {
    gulp.src('./src/html/*/**.html')
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
        }))
        // .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest('dist/html'))
        .pipe(reload({ stream: true }));
});


/*图片压缩*/
gulp.task('images', function() {
    gulp.src('./src/img/*.*')
        .pipe(imageminify({ optimizationLevel: 5 }))
        .pipe(gulp.dest('./dist/img'))
        .pipe(reload({ stream: true }));
});

/*浏览器实时刷新*/
gulp.task('server',['less', 'fileinclude', 'scripts'], function() {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch('src/css/*/*.less', ['less']);
    gulp.watch('src/html/*/*.html', ['fileinclude']);
    gulp.watch('src/js/*/*.js', ['scripts']);

});
/*清楚文件夹*/
gulp.task('clean', function() {
    return gulp.src(['dist']).pipe(clean());
});

gulp.task('default', ['less', 'copy', 'fileinclude', 'images', 'scripts', 'server']);

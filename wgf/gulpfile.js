//引入gulp
var gulp = require("gulp");

//引入文件系统模块
var fs = require('fs');

//引入less (cnpm install gulp-less --save-dev)
var less = require("gulp-less");

//引入minimist
var minimist = require("minimist"),
    argv = minimist(process.argv.slice(2));

//引入浏览器同步browser-sync (cnpm install -g browser-sync)
var bs = require('browser-sync').create();

//生成文件夹以及文件
gulp.task("app", function () {
    //异步创建html
    fs
        .writeFile('index.html', '', function (err, data) {
            if (err) 
                throw err;
            return console.log('html创建成功')
        });

    //异步创建less文件夹及less文件
    fs.mkdir('less', function (err, data) {
        if (err) 
            throw err;
        fs.writeFile('./less/style.less', '');
        return console.log('less文件夹及less文件创建成功')
    });

    //异步创建js文件夹及js文件
    fs.mkdir('js', function (err, data) {
        if (err) 
            throw err;
        fs.writeFile('./js/script.js', '');
        return console.log('js文件夹及js文件创建成功')
    });

    //异步创建images文件夹
    fs.mkdir('images', function (err, data) {
        if (err) 
            throw err;
        return console.log('images文件夹创建成功')
    });
})

//编译less文件
gulp.task("lessc", function () {
    gulp
        .src("less/*.less")
        .pipe(less())
        .pipe(gulp.dest("css"))
})

//监听浏览器变化
gulp.task('jianting', function () {
    //监听less改变，执行less编译，并刷新浏览器
    gulp.watch('less/*.less', ['lessc']);
    //监听index页面改动，自动刷新浏览器
    gulp.watch([
        '*.html', 'css/*.css', 'js/*.js'
    ], function () {
        bs.reload();
    });
})

// 启动本地服务
gulp.task('serve', function () {
    var Use = argv.use;
    bs.init({
        server: {
            baseDir: "./"
        },
        startPath: Use?Use+'.html':null || 'index.html'
    })
});

// 默认任务
gulp.task('default', function () {
    gulp.run('lessc', 'serve', 'jianting');
})

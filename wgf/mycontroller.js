module.exports = function (gulp, less, bs) {
    //编译less文件   
    gulp.task("lessc", function () {
        gulp.src("less/*.less")
            .pipe(less())
            .pipe(gulp.dest("css"))
    })

    //监听浏览器变化
    gulp.task('jianting', function () {
        //监听less改变，执行less编译，并刷新浏览器
        gulp.watch('less/*.less', ['lessc']);
        //监听index页面改动，自动刷新浏览器
        gulp.watch(['index.html','css/style.css','js/script.js'], function () {
            bs.reload();
        });
    })

    // 启动本地服务
    gulp.task('serve', function () {
        bs.init({
            server: {
                baseDir: "./"
            },
            startPath: 'index.html'
        })
    });

    // 默认任务
    gulp.task('default', function () {
        gulp.run('lessc','serve', 'jianting');
    })
}
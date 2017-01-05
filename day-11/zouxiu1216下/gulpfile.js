
var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");
//创建任务
gulp.task("webserver",function () {
    gulp.src("./")
        .pipe(webserver({
            livereload: true, /*修改文件自动刷新*/
            directoryListing: {  /*要不要显示目录，开发环境下可以显示*/
                enable:true,
                path: './'  /*有哪个目录下开始访问*/
            },
            port: 81, /*端口号*/
            host: 'localhost'
        }))
});

//style
gulp.task("styles",function () {
    gulp.src("src/sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("app/css/"))
});
//html
gulp.task("copyHtml",function () {
    gulp.src("src/*.html")

        .pipe(gulp.dest("app/"))
});

//images
gulp.task("copyImg",function () {
    gulp.src("src/img/*")

        .pipe(gulp.dest("app/img"))
});

//css
gulp.task("copyCss",function () {
    gulp.src("src/css/*")

        .pipe(gulp.dest("app/css"))
});

//copyScript
gulp.task("copyScript",function () {
    gulp.src("src/js/*.js")

        .pipe(gulp.dest("app/js/"))
});


//copyLibsScript
gulp.task("copyLibsScript",function () {
    gulp.src("src/js/libs/*.js")

        .pipe(gulp.dest("app/js/libs/"))
});
//看守
gulp.task("watch",function () {
    gulp.watch("src/sass/*.scss",["styles"]);
    gulp.watch("src/*.html",["copyHtml"]);
    gulp.watch("src/js/*.js",["copyScript"]);
});

gulp.task("default",["watch","webserver","copyHtml","styles","copyScript","copyLibsScript","copyImg","copyCss"]);

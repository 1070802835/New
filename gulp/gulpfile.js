//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
	less = require('gulp-less'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch'),
	cssmin = require('gulp-minify-css');
gulp.task('watch', function() {
	// Endless stream mode 
	return watch('src/less/*.less', {
			ignoreInitial: false
		})
		.pipe(less())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('jsmin', function() {
	//压缩src/js目录下的所有js文件
	//除了test1.js和test2.js（**匹配src/js的0个或多个子文件夹）
	gulp.src('src/js/*.js')
		.pipe(uglify())

	.pipe(gulp.dest('dist/js'));
});


//copy index
gulp.task("copyindex",function () {
	gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});

//copy html里面的文件
gulp.task("copyhtml",function () {
    gulp.src('src/html/*.html')
        .pipe(gulp.dest('dist/html'));
});

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function() {
	gulp.src('src/less/*.less') //该任务针对的文件
		.pipe(less()) //该任务调用的模块
		.pipe(cssmin())//编译过后，压缩css
		.pipe(gulp.dest('dist/css')); //将会在src/css下生成index.css
});

gulp.task('default', ['testLess', 'jsmin']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径
const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const minify = require('gulp-uglify');
const sass = require('gulp-sass');
const cssMin = require('gulp-minify-css');
/* Top lv functions gulp顶级函数
gulp.task 定义任务
gulp.src  指定源文件
gulp.dest 指定目标目录
gulp.watch监视文件与文件夹变动
*/

// logs message

gulp.task('message', function() {
	return console.log('gulp is running...');
});

//拷贝html到dist
gulp.task('copyHtml', function() {
	gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

//font文件夹转至dist

gulp.task('font', function() {
	gulp.src('src/font/*').pipe(gulp.dest('dist/font'));
});

// 最小化图片至dist
gulp.task('imageMin', function() {
	gulp
		.src('src/img/*')
		.pipe(imageMin())
		.pipe(gulp.dest('dist/img'));
});

// 最小化js代码至dist
gulp.task('minify', function() {
	gulp
		.src('src/js/*.js')
		.pipe(minify())
		.pipe(gulp.dest('dist/js'));
});

// 编译SASS为CSS并最小化至dist
gulp.task('sass', function() {
	gulp
		.src('src/scss/*.scss')
		// .pipe(concat('style.scss'))
		.pipe(sass().on('error', sass.logError))
		.pipe(cssMin())
		.pipe(gulp.dest('dist/css'));
});

// //设置默认任务 gulp task"default"
gulp.task('default', [
	'message',
	'copyHtml',
	'imageMin',
	'minify',
	'sass',
	'font'
]);

//定义监视任务 触发更改保存自动处理
gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['minify']);
	gulp.watch('src/img/*', ['imageMin']);
	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/*.html', ['copyHtml']);
	gulp.watch('src/font/*', ['font']);
});

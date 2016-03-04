var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var def = require('del');
// var sass = require('gulp-ruby-sass');
// var autoprefixer = require('gulp-autofixer');
// var minifycss = require('gulp-minifycss');


var path = {
	scripts: ['server/**/*.js', 'client/**/*.js'],
  html: ['client/**/*.html'],
  dest: ['dest']

};

// gulp.task('clean', function () {
//   return del(path.)
// });

gulp.task('lint', function() {
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
});

gulp.task('html', function(){
  return gulp.src(path.html)
  .pipe(prettify({indent_char: ' ', inent_size:2}))
  .pipe(gulp.dest('./dest/'))
})

gulp.task('scripts', function() {
	gulp.watch(paths.scripts,['lint']);
});

// gulp.task('process-style', function() {
// 	return gulp.src('main.css')
// 		.pipe(sass({style: 'expanded'}))
// 		.pipe(autoprefixer('last 2 version'))
// 		.pipe(gulp.dest('dest/styles/'))
// 		.pipe(rename({suffix: '.min'}))
// 		.pipe
// 	})

// gulp.task('process-scripts', function() {
// 	return gulp.src('src/srcipts/*.js')
// 		.pipe(concat('main.js'))
// 		.pipe(uglify())

// 	})

gulp.task('default',function() {
	gutil.log('I have configured a gulpfile');
});


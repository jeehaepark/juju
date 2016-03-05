var gulp = require('gulp');
var browserify = require('browserify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var def = require('del');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash');

var path = {
	scripts: ['server/**/*.js', 'client/**/*.js'],
  html: ['client/**/*.html'],
  dest: ['dest']
};


/*##############
  # BROWSERIFY #
  ##############
 */
var customOpts = {
  // entries: ['./node_modules/', './client/script', './client/templates'],
  entries: [''],
  debug: true
};

var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

gulp.task('bundle', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle(){
  gutil.log('bundle.running');
  return b.bundle()
  // log errors if they happen
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source('bundle.js'))
  // optional, remove if you don't need to buffer file contents
  .pipe(buffer())
  // optional, remove if you don't want sourcemaps
  .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
  // Add transformation tasks to the pipeline here
  .pipe(sourcemaps.write('./'))// writes .map file
  .pipe(gulp.dest('./dist'));
};





// gulp.task('clean', function () {
//   return del(path.)
// });

gulp.task('lint', function() {
	return gulp.src(path.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
});

// gulp.task('html', function(){
//   return gulp.src(path.html)
//   .pipe(prettify({indent_char: ' ', indent_size:2}))
//   .pipe(gulp.dest('./dest/'))
// })

gulp.task('scripts', function() {
	gulp.watch(path.scripts,['lint']);
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


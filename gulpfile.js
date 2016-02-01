var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  less = require('gulp-less'),
  ts = require('gulp-typescript'),
  merge = require('merge2'),
  inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('less', function () {
  gulp.src('./css/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function() {
var tsResult = gulp.src('app/**/*.ts')
.pipe(inlineNg2Template(
  {
    base: '/app',          // Angular2 application base folder 
    html: true,         // Process .html files 
    css: true,          // Process .css files 
    target: 'es6',       // Can swap to es5 
    indent: 2           // Indentation (spaces) 
  }))
.pipe(ts(tsProject));
 
return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done. 
  tsResult.dts.pipe(gulp.dest('bin/definitions')),
  tsResult.js.pipe(gulp.dest('bin/app'))
  ]).pipe(livereload());
});

gulp.task('watch', ['less', 'scripts'], function() {
  gulp.watch('./css/*.less', ['less']);
  gulp.watch('./app/**/*.ts', ['scripts']);
});

gulp.task('develop', function () {
  livereload.listen();
  // nodemon({
  //   script: '',
  //   ext: 'js',
  //   stdout: false
  // }).on('readable', function () {
  //   this.stdout.on('data', function (chunk) {
  //     if(/^Express server listening on port/.test(chunk)){
  //       livereload.changed(__dirname);
  //     }
  //   });
  //   this.stdout.pipe(process.stdout);
  //   this.stderr.pipe(process.stderr);
  // });
});
gulp.task('build', [
  'less',
  'scripts'
]);
gulp.task('default', [
  'develop',
  'watch'
]);

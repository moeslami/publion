var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  less = require('gulp-less'),
  ts = require('gulp-typescript'),
  merge = require('merge2');

gulp.task('less', function () {
  gulp.src('./public/css/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function() {
var tsResult = gulp.src('public/app/**/*.ts')
.pipe(ts(tsProject));
 
return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done. 
  tsResult.dts.pipe(gulp.dest('public/bin/definitions')),
  tsResult.js.pipe(gulp.dest('public/bin/app'))
  ]);
});

gulp.task('watch', ['less', 'scripts'], function() {
  gulp.watch('./public/css/*.less', ['less']);
  gulp.watch('./public/app/**/*.ts', ['scripts']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'server/bin/www',
    ext: 'js handlebars',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'less',
  'develop',
  'watch'
]);

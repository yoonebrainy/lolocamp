'use strict';

var gulp = require('gulp');
var util = require('gulp-util');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
    // content
    util.log( 'hello gulp' );
});

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('watch', function(){

  livereload({
    start: true
  });

  livereload.listen();

  gulp.watch(['index.html']).on('change', function(event) {
    util.log(util.colors.yellow('INDEX file changed' + ' (' + event.path + ')'));
    livereload.changed(event.path);
  });

  gulp.watch('**/*.scss', ['sass']); 

});
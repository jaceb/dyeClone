'use strict';
var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

var concat = require('gulp-concat');

var paths = {
  sassSource: ['./public/styles/*.scss']
};
gulp.task('sass', function() {
  return gulp.src(paths.sassSource)
  .pipe(sass())
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./public/styles/'));
});
gulp.task('watch', function(){
  gulp.watch(paths.sassSource, ['sass']);
})
gulp.task('default', ["sass", "watch"]);

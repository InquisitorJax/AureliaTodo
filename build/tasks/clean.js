var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', ['unbundle'], function() {
  return gulp.src([paths.output])
    .pipe(vinylPaths(del));
});

// deletes all the files in the styles path
gulp.task('clean-styles', function () {
  return gulp.src('styles', {read: false})
    .pipe(vinylPaths(del));
});

/**
 * Created by malcolmj on 6/13/2016.
 */
var mocha = require('gulp-mocha');
var childProcess = require('child_process');
require('source-map-support').install();
require('core-js');
var gulp = require('gulp');

gulp.task('watch-test', function () {
  var spawnTests = function() {
    childProcess.spawn('gulp', ['test'], { stdio: 'inherit' });
  }
  spawnTests();
  gulp.watch('**/*.ts', spawnTests);
});

gulp.task('test', ['tsc'], function () {
  return gulp.src(['test/**/*.js'])
    .pipe(mocha({ reporter: 'spec', ui: 'bdd' }));
});

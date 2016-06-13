/**
 * Created by malcolmj on 6/13/2016.
 */
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var childProcess = require('child_process');
require('source-map-support').install();
require('core-js');
var paths = require('../paths');


gulp.task('test-watch', function () {
    var spawnTests = function() {
        childProcess.spawn('gulp', ['test'], { stdio: 'inherit' });
    }
    spawnTests();
    gulp.watch(paths.source, spawnTests);
});

gulp.task('test', ['tsc'], function () {
    return gulp.src([paths.test])
        .pipe(mocha({ reporter: 'spec', ui: 'bdd' }));
});
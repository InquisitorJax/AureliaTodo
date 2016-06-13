/**
 * Created by malcolmj on 6/13/2016.
 */
/** see: http://www.mikeobrien.net/blog/setting-up-a-typescript-aurelia-app-and-tests-from-scratch/ **/
/** Compile typescript files to ES5 standard javascript which is understand by browsers and compatible with tests **/

var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var paths = require('../paths');
var gulp = require('gulp');

gulp.task('tsc', function () {
  return gulp.src('**/*.ts', { base: '.' })
    .pipe(sourcemaps.init())
    .pipe(tsc({
      target: 'ES5',
      module: 'commonjs',
      noEmitOnError: true,
      noImplicitAny: true,
      emitDecoratorMetadata: true,
      experimentalDecorators: true
    }))
    .on('error', function() { process.exit(1); })
    .pipe(sourcemaps.write(paths.output))
    .pipe(gulp.dest(paths.output));
});

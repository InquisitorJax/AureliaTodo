/**
 * Created by malcolmj on 6/13/2016.
 */
var gulp = require('gulp');
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var paths = require('../paths');

gulp.task('tsc', function () {
    return gulp.src(paths.source, { base: '.' })
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
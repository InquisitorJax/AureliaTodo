//NOTE: using webstorm typescript compilation

var gulp = require('gulp');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');
var typescript = require('gulp-typescript');


// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
var typescriptCompiler = typescriptCompiler || null;
gulp.task('build-system', function() {
    if(!typescriptCompiler) {
        typescriptCompiler = typescript.createProject('tsconfig.json', {
            "typescript": require('typescript')
        });
    }
    return gulp.src(paths.dtsSrc.concat(paths.source))
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(changed(paths.output, {extension: '.ts'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(typescript(typescriptCompiler))
        .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
        .pipe(gulp.dest(paths.output));
});

gulp.task('build-html', function() {
    return gulp.src(paths.html)
        .pipe(changed(paths.output, {extension: '.html'}))
        .pipe(gulp.dest(paths.output));
});


/**
 * Created by malcolmj on 6/13/2016.
 */
var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';
var testRoot = 'test/';

module.exports = {
    root: appRoot,
    sass: appRoot + '**/*.scss',
    source: appRoot + '**/*.ts',
    html: appRoot + '**/*.html',
    test: testRoot + '**/*.js',
    output: outputRoot,
    exportSrv: exportSrvRoot,
    doc: './doc',
    dtsSrc: [
        './typings/**/*.d.ts',
        './custom_typings/**/*.d.ts'
    ]
};

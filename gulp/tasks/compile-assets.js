var gulp = require('gulp');
var config = require('../config');

gulp.task('compile-assets', ['libs'], function() {
    return gulp.src(['src/**/*', '!src/**/*.{html,htm}', '!src/**/*.{scss,sass}', '!src/**/*.ts}'])
    .pipe(gulp.dest(config.buildDest));
});
gulp.task('libs', function() {
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**/*.js',
            'zone.js/dist/**',
            '@angular/**/bundles/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest(config.buildDest + '/assets/libs'));
});
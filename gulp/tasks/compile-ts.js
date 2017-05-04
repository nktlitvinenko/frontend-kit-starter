var gulp         = require('gulp'),
    sourcemaps   = require('gulp-sourcemaps'),
    tsc          = require('gulp-typescript'),
    ts           = tsc.createProject('tsconfig.json'),
    tslint       = require('gulp-tslint'),
    env          = require('gulp-environments');
var dev          = env.development,
    prod         = env.production;
var config       = require('../config');

gulp.task('compile-ts', ['tslint'], function() {
    return gulp.src("src/**/*.ts")
        .pipe(dev(sourcemaps.init()))
        .pipe(ts())
        .pipe(dev(sourcemaps.write()))
        .pipe(gulp.dest(config.buildDest));
});
gulp.task('tslint', function() {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});
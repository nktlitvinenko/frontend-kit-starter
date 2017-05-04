var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    cssnano      = require('gulp-cssnano'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    env          = require('gulp-environments');
var dev          = env.development,
    prod         = env.production;
var config       = require('../config');

gulp.task('compile-sass', function() {
    return gulp.src('src/**/*.{scss,sass}')
    .pipe(dev(sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true}))
    .pipe(prod(cssnano()))
    /*.pipe(rename({suffix: '.min'}))*/
    .pipe(dev(sourcemaps.write('')))
    .pipe(gulp.dest(config.buildDest));
});
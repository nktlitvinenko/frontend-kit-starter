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
    console.log(config.env);
    if(config.env === 'production') {
        compileSassProd();
    } else {
        compileSassDev();
    }
});

function compileSassDev() {
    console.log('compile sass dev');
    return gulp.src(config.paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true}))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(config.paths.styles.dest));
}

function compileSassProd() {
    console.log('compile sass prod');
    return gulp.src(config.paths.styles.src)
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true}))
    .pipe(cssnano())
    /*.pipe(rename({suffix: '.min'}))*/
    .pipe(gulp.dest(config.paths.styles.dest));
}
var gulp    = require('gulp'),
    htmlmin = require('gulp-html-minifier');
var config  = require('../config');

gulp.task('compile-html', function() {
    if(config.env === 'production') {
        compileHtmlProd();
    } else {
        compileHtmlDev();
    }
});

function compileHtmlDev() {
    return gulp.src(config.paths.html.src)
        .pipe(gulp.dest(config.paths.html.dest));
}

function compileHtmlProd() {
    return gulp.src(config.paths.html.src)
        .pipe(htmlmin(config.html_minifier_config))
        .pipe(gulp.dest(config.paths.html.dest));
}
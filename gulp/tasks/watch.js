var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence');

gulp.task('watch', function() {
    gulp.watch('src/**/*.{htm,html}', ['compile-html', browserSync.reload]).on('change', function(e) {
        console.log('HTML file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch('src/**/*.{scss,sass}', ['compile-sass', browserSync.reload]).on('change', function(e) {
        console.log('SASS file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch('src/**/*.ts', ['compile-ts', browserSync.reload]).on('change', function(e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
});
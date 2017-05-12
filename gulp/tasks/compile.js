var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('compile', function(cb) {
    runSequence(
        'clean', 
        'compile-assets', 
        'compile-ts', 
        'compile-sass', 
        'compile-html', 
        'bower',
        cb
    );

    console.log('Compiling project...');
});
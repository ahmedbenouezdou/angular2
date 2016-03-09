var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("src/app/**/*.js", ['js-watch']);
    gulp.watch("src/app/**/*.html").on('change', browserSync.reload);
});

gulp.task('js-watch', ['js'], browserSync.reload);


gulp.task('default', ['serve']);
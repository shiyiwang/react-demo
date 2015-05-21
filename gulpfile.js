var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    port = process.env.port || 5000;

gulp.task('browserify', function(){
    gulp.src(['./app/js/*.js', './app/js/*.js'])
    .pipe(browserify({
        transform: 'reactify',
    }))
    .pipe(babel())
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('connect', function(){
    connect.server({
        port: port,
        livereload: true
    })
});

gulp.task('js', function(){
    gulp.src('./dist/**/*.js')
    .pipe(connect.reload())
});

gulp.task('html', function(){
    gulp.src('/app/**/*.html')
    .pipe(connect.reload())
});

gulp.task('watch', function(){
    gulp.watch('./dist/**/*.js',['js']);
    gulp.watch('./dist/**/*.html',['html']);
    gulp.watch('./app/js/**/*.js',['browserify']);
    gulp.watch('./app/js/**/*.jsx',['browserify']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'watch']);

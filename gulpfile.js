let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    cssmin = require('gulp-cssmin');

gulp.task('clean', async function () {
    del.sync('dist')
});

gulp.task('sass', function(){
    return  gulp.src('app/scss/style.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rename({suffix: '.min'}))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 8 version']
            }))
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function (){
    return  gulp.src('app/*.html')
            .pipe(browserSync.reload({ stream: true }))
});

gulp.task('js', function () {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('script', function (){
    return  gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'node_modules/wow.js/dist/wow.js'
    ])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('app/js'))
});

gulp.task('style', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/normalize.css/normalize.css',
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/animate.css/animate.css'
    ])
        .pipe(concat('libs.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'))
});

gulp.task('browser-sync', function (){
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('export', function () {
    let buildHtml = gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'));
    let buildCss = gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'));
    let buildjs = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
    let buildFonts = gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));
    let buildImg = gulp.src('app/images/**/*.*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**.scss', gulp.parallel('sass'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
});

gulp.task('build', gulp.series('clean', 'export'));
gulp.task('default', gulp.parallel('sass', 'style', 'script', 'watch', 'browser-sync'))
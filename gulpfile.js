const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('concat', function() {
    gulp.src(['./app.js', './views/breakfast/breakfastCtrl.js', './views/dessert/dessertCtrl.js', './views/dinner/dinnerCtrl.js', './views/home/homeCtrl.js', './views/lunch/lunchCtrl.js', './views/recipes/recipesCtrl.js', './views/recipes/recipesDirective.js', './mainCtrl.js', './mainSvc.js'])
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist'))
});
gulp.task('sass', function() {
    gulp.src(['./styles.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
});
gulp.task('watch', ['concat', 'sass'], function() {
    gulp.watch(['./app.js', './views/breakfast/breakfastCtrl.js', './views/dessert/dessertCtrl.js', './views/dinner/dinnerCtrl.js', './views/home/homeCtrl.js', './views/lunch/lunchCtrl.js', './views/recipes/recipesCtrl.js', './views/recipes/recipesDirective.js', './mainCtrl.js', './mainSvc.js'], ['concat']);
    gulp.watch('./styles.scss', ['sass']);
});
gulp.task('default', ['watch']);
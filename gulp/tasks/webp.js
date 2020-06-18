const gulp = require('gulp');
const gulpWebp = require('gulp-webp');

module.exports = function webp() {
  return gulp.src('src/img/*.{png,jpg}')
    .pipe(gulpWebp())
    .pipe(gulp.dest('build/img'))
}

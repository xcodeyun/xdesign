const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("./tsconfig.json");
const livereload = require("gulp-livereload");


gulp.task("sass", function () {
  return gulp.src("./extends/sass/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./baled/css"))
})
gulp.task("typescript", function () {
  return gulp.src("./extends/ts/*.ts")
    .pipe(tsProject())
    .pipe(gulp.dest(tsProject.config.compilerOptions.outDir))
})
gulp.task("serve", function () {
  livereload.listen();
  gulp.watch("./extends/sass/*.scss", gulp.series("sass"));
  gulp.watch("./extends/ts/*.ts", gulp.series("typescript"));
})
gulp.task("default", gulp.series("serve"));
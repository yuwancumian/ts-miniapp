const gulp = require("gulp");
const { sass, postcss, rename } = require("gulp-load-plugins")();
const path = require("path");
const cwd = process.cwd();

module.exports = function handleSass() {
  let file = "src/**/*.scss";
  let dist = "dist";
  return (
    gulp
      .src(file)
      .pipe(sass().on("error", sass.logError))
      // .pipe(postcss(plugins))
      .pipe(
        rename({
          extname: ".wxss",
        })
      )
      .pipe(gulp.dest(dist))
  );
};

const gulp = require("gulp");
const { typescript, sourcemaps } = require("gulp-load-plugins")();
const tsProject = typescript.createProject("tsconfig.json");
const cwd = process.cwd();
const path = require("path");
module.exports = function compileJs(filePath) {
  let file = "src/**/*.ts";
  let dist = "dist";
  return tsProject.src().pipe(sourcemaps.init()).pipe(tsProject()).js.pipe(sourcemaps.write()).pipe(gulp.dest("dist"));
};

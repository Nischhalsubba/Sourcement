/*
 * Build pipeline for the Sourcement static site.
 * Compiles Sass, bundles the authored browser scripts in dependency order,
 * copies vendor JavaScript, refreshes HTML cache-busting values, and watches
 * maintained sources during local development.
 */

const { src, dest, watch, series, parallel } = require("gulp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass/legacy")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

const files = {
  scssPath: "./assets/sass/**/*.scss",
  jsPath: ["./assets/js/tabs.js", "./assets/js/model.js", "./assets/js/custom.js"],
};

const vendorFiles = [
  "./node_modules/@glidejs/glide/dist/glide.min.js",
  "./node_modules/particles.js/particles.js",
];

/** Compiles and minifies the maintained Sass source into the root stylesheet. */
function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./"));
}

/** Concatenates the authored browser scripts in their required dependency order. */
function jsTask() {
  return src(files.jsPath).pipe(concat("app.js")).pipe(dest("./js/"));
}

/** Concatenates third-party Glide and particles.js distributions into vendor.js. */
function jsVendorTask() {
  return src(vendorFiles).pipe(concat("vendor.js")).pipe(dest("./js/"));
}

/** Refreshes existing cache-busting query values in the root HTML routes. */
function cacheBustTask() {
  const cacheBustValue = Date.now();

  return src(["./*.html"])
    .pipe(replace(/cb=\d+/g, `cb=${cacheBustValue}`))
    .pipe(dest("."));
}

/** Watches authored Sass and JavaScript and rebuilds the affected bundles. */
function watchTasks() {
  return watch(
    [files.scssPath, "./assets/js/*.js"],
    parallel(scssTask, jsTask),
  );
}

const build = series(parallel(scssTask, jsTask, jsVendorTask), cacheBustTask);

exports.build = build;
exports.watch = watchTasks;
exports.default = series(build, watchTasks);

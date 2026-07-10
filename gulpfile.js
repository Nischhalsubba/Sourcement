const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const files = {
    scssPath: './assets/sass/**/*.scss',
    jsPath: ['./assets/js/tabs.js', './assets/js/model.js', './assets/js/custom.js']
};

const vendorFiles = [
    './node_modules/@glidejs/glide/dist/glide.min.js',
    './node_modules/particles.js/particles.js'
];

function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./'));
}

function jsTask() {
    return src(files.jsPath)
        .pipe(concat('app.js'))
        .pipe(dest('./js/'));
}

function jsVendorTask() {
    return src(vendorFiles)
        .pipe(concat('vendor.js'))
        .pipe(dest('./js/'));
}

function cacheBustTask() {
    const cacheBustValue = Date.now();

    return src(['./*.html'])
        .pipe(replace(/cb=\d+/g, `cb=${cacheBustValue}`))
        .pipe(dest('.'));
}

function watchTasks() {
    watch(
        [files.scssPath, './assets/js/*.js'],
        parallel(scssTask, jsTask)
    );
}

const build = series(
    parallel(scssTask, jsTask, jsVendorTask),
    cacheBustTask
);

exports.build = build;
exports.watch = watchTasks;
exports.default = series(build, watchTasks);

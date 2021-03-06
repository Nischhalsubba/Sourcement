// Initailize Modules

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
var replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
// File path variables
const files = {
    scssPath: './assets/sass/**/*.scss',
    jsPath: ['./assets/js/tabs.js','./assets/js/model.js','./assets/js/custom.js']
};

const vendorFiles = ['./node_modules/@glidejs/glide/dist/glide.min.js', './node_modules/particles.js/particles.js'];

// sass task
function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./'));
}

// JS task
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('app.js'))
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        // .pipe(uglify())
        .pipe(dest('./js/'));
}

function jsVendorTask() {
    return src(vendorFiles)
        .pipe(concat('vendor.js'))
        .pipe(dest('./js/'));
}


// cachebusting task
const cbString = new Date().getTime();

function cacheBustTask() {
    return src(['./*.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString)) //using gulp replace plugin to prevent caching (using regex /'what we looking for' 'cb=' 'looking for any number' '\d'+/g)=> looking for nth number of digit
        //replace('what we are looking for ','what are replacing with')
        .pipe(dest('.'));
}

// watch task
function watchTasks() {
    watch([files.scssPath, './assets/js/*.js'],
        parallel(scssTask, jsTask)
    );
}

// Default task
exports.default = series(
    parallel(scssTask, jsTask, jsVendorTask),
    cacheBustTask,
    watchTasks
)
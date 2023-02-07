const gulp = require('gulp');
// @ts-ignore
const inlinesource = require('gulp-inline-source');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const del = require('del');
const rename = require("gulp-rename");

const combineScripts = () => gulp
    .src("./build/static/js/**/*.js")
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./build/dist/js'));

const replaceInline = () => gulp
    .src('./build/*.html')
    .pipe(replace(/<script.*<\/script>/g, ''))
    .pipe(replace(/<\/body>/g, '<script defer="defer" src="./dist/js/scripts.js" inline></script></body>'))
    .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
    .pipe(replace('./favicon.ico', './static/favicon.ico'))
    .pipe(replace('./logo192.png', './static/logo192.png'))
    .pipe(replace('./manifest.json', './static/manifest.json'))
    .pipe(
        inlinesource({
            compress: false,
            ignore: ['png', 'webp', 'jpg', 'jpeg'],
        })
    )
    .pipe(gulp.dest('./build'));

const moveFavicon = () => gulp
    .src('./build/favicon.ico').pipe(rename("./static/favicon.ico")).pipe(gulp.dest('./build'));

const moveLogo192 = () => gulp
    .src('./build/logo192.png').pipe(rename("./static/logo192.png")).pipe(gulp.dest('./build'));

const moveManifest = () => gulp
    .src('./build/manifest.json').pipe(rename("./static/manifest.json")).pipe(gulp.dest('./build'));

const deleteUnused = () => del([
    './build/dist',
    './build/static/css',
    './build/static/js',
    './build/robots.txt',
    './build/asset-manifest.json',
    './build/favicon.ico',
    './build/logo192.png',
    './build/manifest.json'
])

exports.default = gulp.series(
    combineScripts,
    replaceInline,
    moveFavicon,
    moveLogo192,
    moveManifest,
    deleteUnused
);
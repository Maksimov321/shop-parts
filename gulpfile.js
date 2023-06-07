const gulp        = require('gulp');
const fileinclude = require('gulp-file-include');
const server = require('browser-sync').create();
const { watch, series } = require('gulp');

const paths = {
  scripts: {
    src: './',
    dest: './build/'
  }
};

// Reload Server
async function reload() {
  server.reload();
}

// Copy assets after build
async function copyAssets() {
  gulp.src(['assets/**/*'])
    .pipe(gulp.dest(paths.scripts.dest));
}

// Build files html and reload server
async function buildAndReload() {
  await includeHTML();
  await copyAssets();
  reload();
}

async function includeHTML(){
  return gulp.src([
    '*.html',
    '!navigation.html', // ignore
    '!slider.html', // ignore
    '!categories.html', // ignore
    '!products.html', // ignore
    '!offers.html', // ignore  
    '!categories-2.html', // ignore
    '!popular-products.html', // ignore
    '!info.html', // ignore
    '!blog.html', // ignore
    '!brands.html', // ignore
    '!footer.html', // ignore
    '!modal-window.html', // ignore 
    '!modal-window-2.html', // ignore 
    '!up-arrow.html' // ignore
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}
exports.includeHTML = includeHTML;

exports.default = async function() {
  // Init serve files from the build folder
  server.init({
    server: {
      baseDir: paths.scripts.dest
    }
  });
  // Build and reload at the first time
  buildAndReload();
  // Watch task
  watch(["*.html","assets/**/*"], series(buildAndReload));
};

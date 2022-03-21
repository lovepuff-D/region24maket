const {src, dest, watch, series, parallel} = require('gulp');
// src - путь до исходников (файловый поток чтения),
// dest - поток записи (путь для сохранения полученных файлов)
// watch - запускает задачу, при изменении
// series - запуск задач последовательно
// parallel - запуск задач одновременно
const browserSync = require('browser-sync').create(); // Создаёт сервер
const del = require('del')
const sass = require('gulp-sass')(require("sass"))

// плагины
const fileInclude = require('gulp-file-include');// шаблонизатор html

//обработка html
const html = function () {
    return src('./app/**/*.html')
        // .pipe(fileInclude())
        //Плагин
        // .pipe(dest("./public"))
        .pipe(browserSync.stream())
}
const css = function () {
    return src(['./app/sass/main-stylesheet.scss', './app/sass/mygrid.scss'])
        .pipe(sass({
            includePaths: ['node_modules/bootstrap/scss']
        }))
        //Плагин
        .pipe(dest("./app/css/"))
        .pipe(browserSync.stream())

}



// const clear = () => {
//     return del ("./public")
// }

// Сервер
const server = () => {
    browserSync.init({
        watch: true,
        notify: false,
        server: {
            baseDir: "./app",
            online: false,
        },
    })
}

// наблюдение
const watcher = () => { // Наблюдает за любыми изменениями файлов с расширением *.html  и выполняет задачу
    watch("./app/**/*.html", html);
    watch("./app/sass/**/*.scss", css);
}

// Задачи
exports.html = html;
exports.watch = watcher;
exports.server = server;
// exports.del = clear;
// Сборка
exports.dev = series (
    // clear,
    html,
    css,
    parallel(server, watcher)
);
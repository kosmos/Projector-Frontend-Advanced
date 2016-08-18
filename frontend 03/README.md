Домашняя работа 03
=========

Postcss plugin which adds the specified string to the end of the CSS file.

## Что нужно было реализовать

Необходимо реализовать свой плагин Postcss, который бы менял блок текста:

    .block {
        display: none;
        background: red;
        overflow: hidden;
    }

на блок:

    .block {
        -pikachu-display: none;
        -pikachu-background: red;
        -pikachu-overflow: hidden;
    }

Статья о создании плагинов для Postcss: http://webdesign.tutsplus.com/tutorials/postcss-deep-dive-create-your-own-plugin--cms-24605

## Реализация домашней работы

Поскольку в туториале почти дословно описано как выполнить, то что просилось в домашнем задании,
я реализовал немного другой плагин. Он добавляет в итоговый CSS файл строку с комментарием. Можно
задать текст этой строки, или использовать значение по умолчанию.

## Installation

  npm install postcss-bndr --save-dev

## Usage

    var gulp         = require('gulp');
    var postcss      = require('gulp-postcss');
    var bndrplugin   = require('postcss-bndr');

    var processors = [
    bndrplugin({
        message: 'Сайт створенно із використанняс магії! :)'
    })];

    gulp.task('postcss', function(){
    gulp.src('src/style.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dest'));
    });

## Options

    message - A string with a message that should be added to the generating CSS file.

## Release History

* 0.1.0 Initial release

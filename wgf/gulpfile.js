//引入gulp
var gulp = require("gulp")

//引入less (cnpm install gulp-less --save-dev)
var less = require("gulp-less")

//引入浏览器同步browser-sync (cnpm install -g browser-sync)
var bs = require('browser-sync').create();

//mvc => c 引入自定义模块
var myController = require('./mycontroller');

//mvc => c 调用自定义模块
myController(gulp,less,bs);

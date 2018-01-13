//引入文件系统模块
var fs = require('fs');

//异步创建html
fs.writeFile('index.html', '', function (err, data) {
    if (err) throw err;
    return console.log('html创建成功')
});

//异步创建less文件夹及less文件
fs.mkdir('less', function (err, data) {
    if (err) throw err;
    fs.writeFile('./less/style.less', '');
    return console.log('less文件夹及less文件创建成功')
});

//异步创建js文件夹及js文件
fs.mkdir('js', function (err, data) {
    if (err) throw err;
    fs.writeFile('./js/script.js', '');
    return console.log('js文件夹及js文件创建成功')
});

//异步创建images文件夹
fs.mkdir('images', function (err, data) {
    if (err) throw err;
    return console.log('images文件夹创建成功')
});
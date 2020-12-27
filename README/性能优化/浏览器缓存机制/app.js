/*
 * @Author: your name
 * @Date: 2020-02-03 16:19:15
 * @LastEditTime : 2020-02-03 20:03:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \浏览器缓存机制\app.js
 */
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    if (req.url === '/' || req.url === '' || req.url === '/index.html') {
        fs.readFile('./index.html', function(err, file) {
            console.log(req.url)
            //对主文档设置缓存，无效果
            res.setHeader('Cache-Control', "no-cache, max-age=" + 5);
            res.setHeader('Content-Type', 'text/html');
            res.writeHead('200', "OK");
            res.end(file);
        });
    }
    if (req.url === '/cache.png') {
        fs.readFile('./cache.png', function(err, file) {
            console.log(req.headers);
            console.log(req.url)
            if (!req.headers['if-none-match']) {
                res.setHeader('Cache-Control', "max-age=" + 5);
                res.setHeader('Content-Type', 'images/png');
                res.setHeader('Etag', "ffff");
                res.writeHead('200', "Not Modified");
                res.end(file);
            } else {
                if (req.headers['if-none-match'] === 'ffff') {
                    res.writeHead('304', "Not Modified");
                    res.end();
                } else {
                    res.setHeader('Cache-Control', "max-age=" + 5);
                    res.setHeader('Content-Type', 'images/png');
                    res.setHeader('Etag', "ffff");
                    res.writeHead('200', "Not Modified");
                    res.end(file);
                }
            }
            
        });
    }
    
}).listen(8888);
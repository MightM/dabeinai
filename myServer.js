// 引入相关模块
var http = require('http');
var url = require('url');
var path = require('path');
var readStaticFile = require('./modules/readStaticFile');

// 搭建 HTTP 服务器
var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url);
    var urlPathname = urlObj.pathname;
    var filePathname = path.join(__dirname, "/public", urlPathname);

    switch (urlPathname) {
        case "/main":
            // 因为返回内容中有中文, 所以别忘了指定编码方式
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            res.write("主页页面");
            res.end();
            break;
        case "/aboutme":
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            res.write("关于我页面");
            res.end();
            break;
        case "/projects":
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            res.write("项目介绍页面");
            res.end();
            break;
        // 如果都不匹配就返回 404
        default:
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            res.write("404 - Not Found");
            res.end();
            break;
    }

    // 读取静态文件
    readStaticFile(res, filePathname);
});

// 在 3000 端口监听请求
server.listen(3000, function() {
    console.log("服务器运行中.");
    console.log("正在监听 3000 端口:")
})

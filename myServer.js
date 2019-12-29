var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');





var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url);
    var urlPathname = urlObj.pathname;
    var filePathname = path.join(__dirname, "/public", urlPathname);

    // 解析后对象的 ext 属性中保存着目标文件的后缀名
    var ext = path.parse(urlPathname).ext;

    // 读取文件的代码...


    fs.readFile(filePathname, (err, data) => {
        // 如果有问题返回 404
        if (err) {
            res.writeHead(404);
            res.write("404 - File is not found!");
            res.end();
            // 没问题返回文件内容
        } else {
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        }
    })
})

    // console.log(filePathname)
    // res.writeHead(200, {'Content-Type':'text/plain'});
    // res.write("Hello World");
    // res.end();



server.listen(3000, function() {
    console.log("服务器启动成功!");
    console.log("正在监听 3000 端口:");
});
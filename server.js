//nodejs  express

var http = require('http');
var fs = require('fs');
http.createServer(function (req,res) {
    console.log(req.url);
    if(req.url=='/data'){
        var obj = {
            name:1,
            password:2
        }
        res.end(JSON.stringify(obj));
    }
    getFile(req.url);
    function getFile(filename){
        fs.readFile(filename.slice(1), function (err, data) {
            if(err||data ==null){
                res.end('not found')
            }else{
                res.setHeader(
                    'content-type',getType(filename)+';charset=utf8'
                );
                res.end(data);
            }

        })
    }
    function getType(path){
        if(path.indexOf('.html')>-1){
            return 'text/html';
        }else if(path.indexOf('.css')>-1){
            return 'text/css';
        }else if(path.indexOf('.js')>-1){
            console.log(path);
            return 'text/javascript';
        }
    }
}).listen(8888, function () {
    console.log('server start');
});
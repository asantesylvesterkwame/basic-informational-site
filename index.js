const http = require('http');

var fs = require('fs')

 const hostname = '127.0.0.1';
const port = 8080;

// url variable

const server = http.createServer(function (req,res) {
    console.log('the link that was requested is '+ " " +req.url );
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200,{"Content-Type": "text/html"});
        fs.createReadStream(__dirname+'/index.html').pipe(res);

    }
    else if(req.url === '/about'){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    }
    else if(req.url === '/contact-me'){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream(__dirname + '/contact-me.html').pipe(res)
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
    console.log("server is running");
}).listen(port,hostname)




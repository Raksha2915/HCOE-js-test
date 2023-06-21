const http = require('http');
http.createServer((req,res)=>{
    // res.writeHead(200,{'Content_type':'text.html'});
    res.end('Hello');
}).listen(8080);
console.log('App running on port 8080');
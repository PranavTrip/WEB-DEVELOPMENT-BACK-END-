const http = require('http');
const hostname = ('127.0.0.1');
const port = 8000;
const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("Hello World from NODE.JS");
});
server.listen(port, hostname, () => {
    console.log(`The server is running at http://${hostname}:${port}`);
})
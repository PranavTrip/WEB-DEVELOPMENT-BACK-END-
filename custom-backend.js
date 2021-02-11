const http = require('http');
const fs = require('fs');
const hostname = ('127.0.0.1');
const port = 80;
const home = fs.readFileSync('./NODE.JS/home.html', 'utf-8');
const about = fs.readFileSync('./NODE.JS/about.html', 'utf-8');
const services = fs.readFileSync('./NODE.JS/services.html', 'utf-8');
const contact = fs.readFileSync('./NODE.JS/contact.html', 'utf-8');
const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;
    res.statuscode = 200;
    res.setHeader = ('Content-Type', 'text/html');
    if (url == '/home') {
        res.end(home);
    }
    else if (url == '/about') {
        res.end(about);
    }
    else if (url == '/services') {
        res.end(services);
    }
    else if (url == '/contact') {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});
server.listen(port, hostname, () => {
    console.log(`The server is running at http://${hostname}:${port}`)
})
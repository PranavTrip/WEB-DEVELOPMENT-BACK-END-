// In the previous custom backend we need to mention the page where we want to land but here we will visit the pages just  by clicking on their respective links
const http = require('http');
const hostname = ('127.0.0.1');
const port = 80;
const fs = require('fs');
const home = fs.readFileSync('NODE.JS/home1.html');
const about = fs.readFileSync('./NODE.JS/about1.html');
const services = fs.readFileSync('./NODE.JS/services1.html');
const contact = fs.readFileSync('./NODE.JS/contact1.html');
const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;
    res.statuscode = 200;
    res.setHeader = ('Content-Type', 'text/html');
    if (url == '/' || url == '/home') {
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
    console.log(`The server is running at http://${hostname}:${port}`);
})
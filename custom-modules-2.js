// In this file we will import the custom module that we created 
const http = require('http');
const dt = require('./custom-modules');
const hostname = ('127.0.0.1');
const port = 880;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("The date is :" + dt.date);
    res.end();
});

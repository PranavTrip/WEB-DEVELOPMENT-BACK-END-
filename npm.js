
const http = require("http");
const hostname = ('127.0.0.1');
const port = 80;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(`<p>ALL ABOUT NPM(node package manager)</p>
    <p>npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs.</p>
    <p>We can install modules using npm by opening a new terminal and typing 'npm install <module-name>' and then the npm will install that module to your computer</p>
    <p>For ex: If we want to install express to our computer we just need to type 'npm install express' and then it will install express to our computer</p>
    <p>We can also uninstall modules using npm by typing 'npm uninstall <module-name>' </p>`)
});
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})
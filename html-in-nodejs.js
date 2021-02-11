// SERVING HTML FILES IN NODE JS
const http = require('http');
const hostname = ('127.0.0.1');
const port = 8000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ANIMATIONS AND KEYFRAMES</title>
        <style>
            .container {
                background-color: goldenrod;
                margin: 0px 0px;
                height: 100vh;
            }
    
            #para {
                width: 200px;
                height: 200px;
                background-color: gray;
                text-align: center;
                animation: anim1 3s ease-in-out 0s infinite none;
            }
    
            #para2 {
                width: 200px;
                height: 200px;
                margin: 20px 0px;
                border: 2px solid red;
                display: block;
                margin: auto;
                position: relative;
                animation: anim2 4s linear 0s infinite forwards;
            }
    
            @keyframes anim1 {
                from {
                    width: 200px;
                }
    
                to {
                    width: 800px;
                }
            }
    
            @keyframes anim2 {
                0% {
                    top: 0px;
                    left: 0px;
                }
    
                25% {
                    top: 250px;
                    left: 0px;
                }
    
                75% {
                    top: 250px;
                    left: 250px;
                }
    
                100% {
                    top: 0px;
                    left: 250px;
                }
    
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="box" id="para">
                <p>I am ANIMATION 1</p>
            </div>
            <div class="box" id="para2">
                <p>I am ANIMATION 2</p>
            </div>
        </div>
    </body>
    
    </html>`)
});
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})
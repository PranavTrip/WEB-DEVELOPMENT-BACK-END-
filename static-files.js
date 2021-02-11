// Static files are the public files that we want to keep on our server so that anyone can download or use it.
const express = require('express');
const app = express();
const port = 80;
// To serve static files we use:
app.use('/static', express.static('EXPRESS.JS'));
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})
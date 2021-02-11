const express = require('express');
const app = express();
const port = 80;
// Sending a get request using express module 
app.get('/', (req, res) => {
    res.send('This is the homepage of the first express program');
});
app.listen(port, () => {
    console.log(`The server is running at port ${port}`);
})
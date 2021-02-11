const express = require('express');
const app = express();
const port = 80;
// Sending a post request using express module
app.post('/', (req, res) => {
    res.send('This is the first post request using EXPRESS');
});
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
const express = require('express');
const app = express();
const path = require('path');
const port = 80;
const fs = require('fs');
const { query } = require('express');

// Setting PUG as template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'Views'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.render('contact');
});
app.post('/', (req, res) => {
    name = req.body.name
    email = req.body.email
    number = req.body.number
    qury = req.body.qury
    address = req.body.address
    message = req.body.message

    let outputToWrite = `Name:${name},Email:${email},Phone Number:${number},Query:${qury},Address:${address},Message:${message}`;
    fs.writeFileSync('output.txt', outputToWrite);
    res.render('contact.pug');
})
app.listen(port, () => {
    console.log(`Server is running at port${port}`);
});
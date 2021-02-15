const express = require('express');
const app = express();
const path = require('path');
const port = 80;
const fs = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const { urlencoded } = require('express');
let db = mongoose.connection;
mongoose.connect('mongodb://localhost/PRANAV', {
    useNewUrlParser: true, useUnifiedTopology: true
});
db.on('error', console.error.bind(console, 'Connection error'));
//  Creating the schema to store our data in database
let contactschema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    qury: String,
    address: String,
    message: String
});
// Creating a model of our created schema
let CONTACT = mongoose.model('CONTACT', contactschema);

// Setting Pug as template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'Views'));
app.use(express.urlencoded());
// Back to express
app.get('/', (req, res) => {
    res.render('contact2.pug');
});
app.post('/', (req, res) => {
    var myData = new CONTACT(req.body);
    myData.save().then(() => {
        res.send('This item has been saved to the database')
    }).catch(() => {
        res.status(400).send('item was not saved to the databse')
    })
});
app.listen(port, () => {
    console.log(`Server is running at port${port}`);
});

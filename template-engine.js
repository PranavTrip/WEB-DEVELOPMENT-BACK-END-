// A template engine (template processor) is a software designed to combine templates with a data model to produce result documents. In simple words, if we feed anything to the template engine, it provides the custom template output.
// We will use template engine named 'PUG'
// To install 'PUG' do: npm install pug 
const express = require('express');
const app = express();
// Path is a module that imports and includes various paths between directories and files
const path = require('path');
const port = 80; //We use port 80 because this is the dafault port
// To set template engine as pug
app.set('view engine', 'pug');
// To set the directory
app.set('views', path.join(__dirname, 'Views'));
app.get('/', (req, res) => {
    res.render('demo');
});
app.listen(port, () => {
    console.log(`The server is running at localhost${port}`);
});
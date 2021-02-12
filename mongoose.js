const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PRANAV', {
    useNewUrlParser: true, useUnifiedTopology: true
});
// Establishing a connection
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log("COnnected");
});
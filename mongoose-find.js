const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PRANAV', {
    useNewUrlParser: true, useUnifiedTopology: true
});
// Establishing a connection
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Creating schemas in Mongoose
let newbike = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    sold: Number,
    mileage: Number
});

// Creating a model to compile the schemas
let items = mongoose.model('items', newbike);

// Creating a new object in our collection ITEMS
let bike1 = new items({ name: "Jupiter", price: 22000, rating: 4, sold: 5000, mileage: 30 });
console.log(bike1.name);
console.log(bike1.price);
console.log(bike1.rating);
console.log(bike1.sold);
console.log(bike1.mileage);

// Saving this data in the database
bike1.save(function (err, bike1) {
    if (err) return console.error(err);
    console.log("Inserted successfully");
});

// To find the items in our database
items.find((err, items) => {
    if (err) return console.error(err);
    console.log(items);
});

// To find items with a specific filter
items.find({ name: 'Jupiter' }, (err, items) => {
    if (err) return console.error(err);
    console.log(items);
})
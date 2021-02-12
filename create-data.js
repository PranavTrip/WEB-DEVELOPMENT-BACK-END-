// Type all the code in Windows Powershell or Linux terminal
// Open two windows of powershell in the first window run 'mongod' and leave as it is , now in second window type 'mongo' and we will use this window to run the CRUD commands of the database. This will establish a conection between mongo and mongod.
// CRUD : Create,Read,Update,Delete. These are the basic functions of a database.
// Here we will see about the C in CRUD i.e Create data
use PRANAV  //Here PRANAV is the database and for activation of any database the database must contain one document.

// To insert one document at a time
db.items.insertOne({ name: "Apache", price: 79000, rating: 4.3, sold: 20000, mileage: 22 })

// To insert many documents at a time
db.items.insertMany([{ name: "Discover", price: 59000, rating: 3.3, sold: 2000, mileage: 32 }, { name: "Pulsar", price: 73000, rating: 4.3, sold: 22000, mileage: 27 }, { name: "Bullet", price: 179000, rating: 4.7, sold: 12000, mileage: 23 }, { name: "Vikrant", price: 89000, rating: 4.7, sold: 80000, mileage: 30 }, { name: "Honda", price: 59000, rating: 3.9, sold: 25000, mileage: 35 }, { name: "Activa", price: 49000, rating: 4.5, sold: 90000, mileage: 34 }])
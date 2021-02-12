// Type all the code in Windows Powershell or Linux terminal
// Open two windows of powershell in the first window run 'mongod' and leave as it is , now in second window type 'mongo' and we will use this window to run the CRUD commands of the database. This will establish a conection between mongo and mongod.
// CRUD : Create,Read,Update,Delete. These are the basic functions of a database.
// Here we will see about the U in CRUD i.e Update data

use PRANAV  //Here PRANAV is the database and for activation of any database the database must contain one document.

// To update one data at a time
db.items.updateOne({ name: "Discover" }, { $set: { price: 50000 } })

// To update multiple data at a time
db.items.updateMany({ name: "Discover" }, { $set: { price: 55000, rating: 3.5 } })

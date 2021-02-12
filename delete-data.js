// Type all the code in Windows Powershell or Linux terminal
// Open two windows of powershell in the first window run 'mongod' and leave as it is , now in second window type 'mongo' and we will use this window to run the CRUD commands of the database. This will establish a conection between mongo and mongod.
// CRUD : Create,Read,Update,Delete. These are the basic functions of a database.
// Here we will see about the D in CRUD i.e Delete data
use PRANAV  //Here PRANAV is the database and for activation of any database the database must contain one document.

// To delete one item at time
db.items.deleteOne({name:"Apache"})  //Delete the item whose name is Apache

// To delete many items at a time
db.items.deleteMany({price:30000})  //Delete all the items whose price is 30000
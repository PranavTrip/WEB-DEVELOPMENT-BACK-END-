// Type all the code in Windows Powershell or Linux terminal
// Open two windows of powershell in the first window run 'mongod' and leave as it is , now in second window type 'mongo' and we will use this window to run the CRUD commands of the database. This will establish a conection between mongo and mongod.
// CRUD : Create,Read,Update,Delete. These are the basic functions of a database.
// Here we will see about the R in CRUD i.e Read data
use PRANAV  //Here PRANAV is the database and for activation of any database the database must contain one document.

// To find one document
db.items.find({ rating: 3.3 }) //This will display all the items whose rating is 3.3
//  To find items which satisfies two conditions at a time
db.items.find({ rating: { $gte: 3.3 }, price: { $lte: 70000 } }) //This will display all the items whose rating is greater than or equal to 3.3 and whose price is lower than or equal to 70000

// gte: greater than or equal to
// lte: lower than or equal to
// gt: greater than
// lt: lower than

// To find items which satisfies any one condition at a time
db.items.find({$or:[{ rating: { $gt: 3.3 } }, { price: { $gt: 50000 } }]})
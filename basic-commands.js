// Type all the code in Windows Powershell or Linux terminal
// Open two windows of powershell in the first window run 'mongod' and leave as it is , now in second window type 'mongo' and we will use this window to run the CRUD commands of the database. This will establish a conection between mongo and mongod.
// CRUD : Create,Read,Update,Delete. These are the basic functions of a database.
// Some of the basic commands are:
show dbs //This will list down all the databases present on the system.
 
use PRANAV //Here PRANAV is the database and for activation of any database the database must contain one document.

db.items.find() //This shows the object in the database which is running/activated.
    //  items is a collection.
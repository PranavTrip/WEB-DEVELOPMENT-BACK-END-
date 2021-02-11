// Asynchronous execution does not wait for a function to execute it moves to the next line and when the function is called when it gets executed.
// Asynchronous exexcution may or may not get executed line by line thus we use callbacks in Asynchronous execution.
const fs = require('fs');
let text = fs.readFile('./NODE.JS/text.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log("This is asynchronous execution");
console.log("Here line by line is not guranted");

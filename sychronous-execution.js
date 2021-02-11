// Synchronous execution refers to the line-by-line execution of the program.
// In Synchronous execution line-by-line execution is guranteed
const fs = require('fs');
let text = fs.readFileSync('./NODE.JS/text.txt', 'utf-8');
console.log(text);
console.log("This is synchronous execution");
console.log("Here every line is executed from top to bottom");
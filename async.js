const fs = require("fs");

console.log("1");
fs.readFile("text.txt", console.log)
console.log("2")

//second test is here
//We are using the (err, data) and then console the data to String otherwise it will return a buffer.
console.log("3");
fs.readFile("text.txt", (err, data) => console.log(data.toString()));
console.log("4")
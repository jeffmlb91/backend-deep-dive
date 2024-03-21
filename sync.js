const fs = require("fs");

console.log("1");

const result = fs.readFileSync("text.txt");
console.log("File is  " + result);
console.log("2")


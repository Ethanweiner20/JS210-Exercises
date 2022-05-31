// Arithmetic Integer

const rlSync = require("readline-sync");

let n1 = parseInt(rlSync.question("Enter the first nummber:\n"));
let n2 = parseInt(rlSync.question("Enter the second number:\n"));

console.log(`${n1} + ${n2} = ${n1 + n2}`);
console.log(`${n1} ** ${n2} = ${n1 ** n2}`);

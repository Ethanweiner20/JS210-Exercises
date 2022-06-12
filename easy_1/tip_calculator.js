'use strict';

// Tip Calculator

const rlSync = require('readline-sync');

const bill = parseFloat(rlSync.question('What is the bill? '));
const tipPercentage = parseFloat(
  rlSync.question('What is the tip percentage? ')
);

const tip = bill * (tipPercentage / 100);
const total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

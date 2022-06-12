'use strict';

// When Will I Retire

const rlSync = require('readline-sync');

const currentAge = parseInt(rlSync.question('What is your age? '), 10);
const retirementAge = parseInt(
  rlSync.question('At what age would you like to retire? '),
  10
);
const deltaYears = retirementAge - currentAge;

const currentYear = new Date().getFullYear();
console.log(
  `It's ${currentYear}. You will retire in ${currentYear + deltaYears}.`
);
console.log(`You have only ${deltaYears} years of work to go!`);

/*
Further Exploration

If the `new` keyword wasn't used, Date() would return a string representation
of the current date (unlike the constructor version, which returns a Date
object). As a result, the program would fail when `getFullYear` is called on
`currentDate`.
*/

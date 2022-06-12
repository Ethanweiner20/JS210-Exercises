'use strict';

// Leap Years Part 1

// By ordering the conditions correctly, we can properly cover all the cases

/*
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
*/

const isLeapYear = (year) =>
  year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // false
console.log(isLeapYear(400)); // true

// Further Exploration: `isLeapYear` will fail for any leap years divisible by
// 400, because those cases are handled in the first clause of the conditional
// statement.

function isLeapYearComplex(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

console.log(isLeapYearComplex(2016)); // true
console.log(isLeapYearComplex(2015)); // false
console.log(isLeapYearComplex(2100)); // false
console.log(isLeapYearComplex(2400)); // true
console.log(isLeapYearComplex(240000)); // true
console.log(isLeapYearComplex(240001)); // false
console.log(isLeapYearComplex(2000)); // true
console.log(isLeapYearComplex(1900)); // false
console.log(isLeapYearComplex(1752)); // true
console.log(isLeapYearComplex(1700)); // false
console.log(isLeapYearComplex(1)); // false
console.log(isLeapYearComplex(100)); // false
console.log(isLeapYearComplex(400)); // true

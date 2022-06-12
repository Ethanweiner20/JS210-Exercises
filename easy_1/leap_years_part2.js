'use strict';

// Leap Years Part 2

// By ordering the conditions correctly, we can properly cover all the cases

const isLeapYear = (year) => {
  return year < 1752 ? isLeapYearJulian(year) : isLeapYearGregorian(year);
};

const isLeapYearJulian = (year) => year % 4 === 0;

const isLeapYearGregorian = (year) =>
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
console.log(isLeapYear(1700)); // true
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // true
console.log(isLeapYear(400)); // true

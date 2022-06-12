'use strict'

// Reverse Number

// String-Based
// Note: Zeroes are dropped (no need to worry about preserving)

function reverseNumber(integer) {
  const reversedString = String(integer).split('').reverse().join('');
  return parseInt(reversedString, 10);
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456)); // 654
console.log(reverseNumber(12000)); // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1)); // 1

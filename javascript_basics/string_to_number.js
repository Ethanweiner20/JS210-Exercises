'use strict';

// Convert a String to a Number

// Requirement: Use no built-in functions for conversion

// Using * operator for conversion (cheating?)

/*
function stringToInteger(string) {
  let number = 0;

  for (let i = 0; i < string.length; i++) {
    let index = string.length - i - 1;
    number += string[index] * 10 ** i;
  }

  return number;
}

console.log(stringToInteger("4321")); // 4321
console.log(stringToInteger("570")); // 570
*/

// Using a conversion object

const DIGITS = {
  0: 0, 1: 1, 2: 2, 3: 3, 4: 4,
  5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
};

function stringToInteger(string) {
  number = 0;

  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    let exp = string.length - index - 1;
    number += DIGITS[char] * 10 ** exp;
  }

  return number;
}

console.log(stringToInteger("4321")); // 4321
console.log(stringToInteger("570")); // 570

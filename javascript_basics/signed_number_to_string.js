'use strict';

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function signedIntegerToString(integer) {
  if (integer < 0) {
    return "-" + integerToString(-integer);
  } else if (integer > 0) {
    return "+" + integerToString(integer);
  } else {
    return integerToString(integer);
  }
}

function integerToString(integer) {
  return digits(integer)
    .map((digit) => DIGITS[digit])
    .join("");
}

function digits(integer) {
  let digits = [];

  // Ensure at least one digit is processed
  do {
    let digit = integer % 10;
    digits.unshift(digit);
    integer = Math.floor(integer / 10);
  } while (integer > 0);

  return digits;
}

console.log(signedIntegerToString(4321)); // "+4321"
console.log(signedIntegerToString(-123)); // "-123"
console.log(signedIntegerToString(0)); // "0"

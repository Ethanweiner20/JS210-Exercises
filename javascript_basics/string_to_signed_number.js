'use strict';

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1));
    case "+":
      return stringToInteger(string.slice(1));
    default:
      return stringToInteger(string);
  }
}

function stringToInteger(string) {
  let number = 0;

  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    let exp = string.length - index - 1;
    number += DIGITS[char] * 10 ** exp;
  }

  return number;
}

console.log(stringToSignedInteger("4321")); // 4321
console.log(stringToSignedInteger("-570")); // -570
console.log(stringToSignedInteger("+100")); // 100

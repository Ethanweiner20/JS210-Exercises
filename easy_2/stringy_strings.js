'use strict';

// Stringy Strings

/*
Options:
- Toggle 1/0 until reached count
- Use property of current index (even/odd)
*/

/*
function stringy(count) {
  let result = '';
  let digit = '1';

  for (let index = 0; index < count; index++) {
    result += digit;
    digit = digit === '1' ? '0' : '1';
  }

  return result;
}
*/

function stringy(count) {
  let result = '';

  for (let index = 1; index <= count; index++) {
    result += String(index % 2);
  }

  return result;
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"

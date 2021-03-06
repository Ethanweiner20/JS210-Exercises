'use strict';

// Daily Double

function crunch(string) {
  let crunched = '';

  for (let index = 0; index < string.length; index++) {
    const currentChar = string[index];
    if (currentChar !== string[index - 1]) {
      crunched += currentChar;
    }
  }

  return crunched;
}

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""

function crunchRegex(string) {
  return string.replace(/(.)\1+/g, '$1');
}

console.log(crunchRegex('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunchRegex('4444abcabccba')); // "4abcabcba"
console.log(crunchRegex('ggggggggggggggg')); // "g"
console.log(crunchRegex('a')); // "a"
console.log(crunchRegex('')); // ""

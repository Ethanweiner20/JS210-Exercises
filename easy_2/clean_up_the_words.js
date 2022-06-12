'use strict';

// Clean Up the Words

// Option 1: Straightforward; Option 2: Regex pattern replacement

function cleanUp(string) {
  let cleanedString = '';

  for (let index = 0; index < string.length; index++) {
    const char = string[index];
    if (/[A-Z]/i.test(char)) {
      cleanedString += char;
    } else if (!cleanedString.endsWith(' ')) {
      cleanedString += ' ';
    }
  }

  return cleanedString;
}

console.log(cleanUp("---what's my +*& line?")); // " what s my line "

const cleanUpRegex = (string) => string.replace(/[^A-Z]+/gi, ' ');

console.log(cleanUpRegex("---what's my +*& line?")); // " what s my line "

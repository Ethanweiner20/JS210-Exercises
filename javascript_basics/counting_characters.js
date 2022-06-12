'use strict';

// Counting Characters

const rlSync = require("readline-sync");

// while (true) {
//   const phrase = rlSync.question("Please enter a phrase: ");
//   console.log(`There are ${phrase.length} characters in ${phrase}`);
// }

// Count only non-space characters

// while (true) {
//   const phrase = rlSync.question("Please enter a phrase: ");
//   const numberOfCharacters = phrase.replace(/\s/g, "").length;
//   console.log(`There are ${numberOfCharacters} non-space characters in ${phrase}`);
// }

// Count only alphabetic characters

while (true) {
  const phrase = rlSync.question("Please enter a phrase: ");
  const numberOfCharacters = phrase.match(/[A-Z]/gi).length;
  console.log(
    `There are ${numberOfCharacters} alphabetic characters in ${phrase}`
  );
}

// Double Char Part 2

// Idea: Double all characters except non-word characters (\W), digits (\d),
// & vowels (note: non-word characters includes punctuation & whitespace)

function doubleConsonants(string) {
  return string.replace(/([^aeiou\W\d])/gi, '$1$1');
}

console.log(doubleConsonants('String')); // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
console.log(doubleConsonants('')); // ""

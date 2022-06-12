'use strict';

// Palindromic Strings Part 2

function isRealPalindrome(string) {
  const sanitizedString = string.toLowerCase().replace(/[^a-z\d]/g, '');
  return isPalindrome(sanitizedString);
}

function isPalindrome(string) {
  const reversed = string.split('').reverse().join('');
  return string === reversed;
}

console.log(isRealPalindrome('madam')); // true
console.log(isRealPalindrome('Madam')); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome('356653')); // true
console.log(isRealPalindrome('356a653')); // true
console.log(isRealPalindrome('123ab321')); // false

'use strict'

// Palindromic Number

function isPalindromicNumber(number) {
  console.log(number);
  return isPalindrome(String(number));
}

function isPalindrome(string) {
  const reversed = string.split('').reverse().join('');
  return string === reversed;
}

console.log(isPalindromicNumber(0034543)); // true
console.log(isPalindromicNumber(123210)); // false
console.log(isPalindromicNumber(22)); // true
console.log(isPalindromicNumber(5)); // true

/*
Further Exploration

The solution will no longer work, because Javascript interprets numbers with
leading zeros as octal numbers. In order to address this, we'd have to force
Javascript to avoid converting the given octal number into base 10.

If the goal is to simply disregard the leading zeroes in considering whether
it's a palindrome, we could simply convert the argument back to its original
form by converting from base 10 to base 8, using `Number.prototype.toString`.
*/

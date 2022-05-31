const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"

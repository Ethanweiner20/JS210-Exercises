'use strict'

// Always Return Negative

function negative(number) {
  return -Math.abs(number); // number < 0 ? number : -number
}

console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0

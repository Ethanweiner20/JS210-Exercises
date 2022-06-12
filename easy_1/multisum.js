'use strict';

// Multiples of 3 and 5

function multisum(limit) {
  let sum = 0;

  for (let number = 1; number <= limit; number++) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
  }

  return sum;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168

'use strict';

// Multiplicative Average

function showMultiplicativeAverage(integers) {
  const product = integers.reduce((prod, integer) => prod * integer);
  const average = product / integers.length;
  return average.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5])); // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"

// Running Totals

// Increments the total and returns the new total for transformation
function runningTotal(numbers) {
  let total = 0;
  return numbers.map(number => {
    total += number;
    return total;
  });
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []

// The `map` method is well suited for any problems involving array
// transformation. A key thing to notice is when the input/output arrays have
// the same length, `map` will likely come in handy.

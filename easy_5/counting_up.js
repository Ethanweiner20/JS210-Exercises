// Counting Up

function sequence(upperBound) {
  const numbers = [];

  for (let number = 1; number <= upperBound; number++) {
    numbers.push(number);
  }

  return numbers;
}

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]

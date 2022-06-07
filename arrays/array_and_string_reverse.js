// Array and String Reverse

function reverse(inputForReversal) {
  const reversed = [];

  for (let index = 0; index < inputForReversal.length; index++) {
    reversed.unshift(inputForReversal[index]);
  }

  return Array.isArray(inputForReversal) ? reversed : reversed.join('');
}

console.log(reverse('Hello')); // "olleH"
console.log(reverse('a')); // "a"
console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse([])); // []

const array = [1, 2, 3];
console.log(reverse(array)); // [3, 2, 1]
console.log(array); // [1, 2, 3]

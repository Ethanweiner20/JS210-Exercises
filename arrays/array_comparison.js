// Array Comparison

// Requirements

// Elements should be compared strictly
// Elements must contain same elements, and same counts of those elements

// Deletion

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  const array2Copy = array2.slice();

  for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    const array2Index = array2Copy.indexOf(element);
    if (array2Index === -1) return false;
    array2Copy.splice(array2Index, 1);
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a'])); // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3])); // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1])); // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3])); // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1])); // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2])); // false
console.log(areArraysEqual([1, 1, 1], [1, 1])); // false
console.log(areArraysEqual([1, 1], [1, 1])); // true

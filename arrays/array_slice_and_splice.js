// Array Slice and Splice

function slice(array, begin, end) {
  if (begin > array.length) {
    begin = array.length;
  }

  if (end > array.length) {
    end = array.length;
  }

  const sliced = [];

  for (let index = begin; index < end; index++) {
    sliced.push(array[index]);
  }

  return sliced;
}

console.log(slice([1, 2, 3], 1, 2)); // [2]
console.log(slice([1, 2, 3], 2, 0)); // []
console.log(slice([1, 2, 3], 5, 1)); // []
console.log(slice([1, 2, 3], 0, 5)); // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3)); // [2, 3]
console.log(arr1); // [1, 2, 3]

// Returns deleted elements
// Inserts elements at `start` after deletion
// Option 1: Perform deletion first, then perform insertion
// Option 2: Delete & insert at the same time? (try first)

function splice(array, start, deleteCount, ...elements) {
  if (start > array.length) {
    start = array.length;
  }

  const maxDeleteCount = array.length - start;

  if (deleteCount > maxDeleteCount) {
    deleteCount = maxDeleteCount;
  }

  const removedElements = deleteFrom(array, start, deleteCount);
  insertFrom(array, start, elements);
  return removedElements;
}

function deleteFrom(array, start, deleteCount) {
  const removedElements = [];

  for (let index = start; index < array.length; index++) {
    if (index < start + deleteCount) {
      removedElements.push(array[index]);
    }
    array[index] = array[index + deleteCount];
  }

  array.length = array.length - deleteCount;
  return removedElements;
}

function insertFrom(array, start, elements) {
  const newLength = array.length + elements.length;

  for (let index = newLength - 1; index >= start; index--) {
    if (index < start + elements.length) {
      array[index] = elements.pop();
    } else {
      array[index] = array[index - elements.length];
    }
  }
}

// Using a copy of the array
/*
function splice(array, start, deleteCount, ...elements) {
  if (start > array.length) {
    start = array.length;
  }

  const maxDeleteCount = array.length - start;

  if (deleteCount > maxDeleteCount) {
    deleteCount = maxDeleteCount;
  }

  const arrayCopy = slice(array, 0, array.length);

  const newLength = array.length - deleteCount + elements.length;
  array.length = newLength;

  // Replace w/ `elements`
  for (let i = 0; i < elements.length; i++) {
    array[start + i] = elements[i];
  }

  // Adjust remaining elements
  for (let i = 0; i < arrayCopy.length - start - deleteCount; i++) {
    array[start + elements.length + i] = arrayCopy[start + deleteCount + i];
  }

  return slice(arrayCopy, start, start + deleteCount);
}
*/

// Full array recreation
function splice(array, start, deleteCount, ...elements) {
  if (start > array.length) start = array.length;

  const maxDeleteCount = array.length - start;
  if (deleteCount > maxDeleteCount) deleteCount = maxDeleteCount;

  let removedElements = slice(array, start, start + deleteCount);

  let head = slice(array, 0, start);
  let middle = elements;
  let tail = slice(array, start + deleteCount, array.length);

  while (array.length) array.pop();
  array.push(...head, ...middle, ...tail);

  return removedElements;
}

console.log(splice([1, 2, 3], 1, 2)); // [2, 3]
console.log(splice([1, 2, 3], 1, 3)); // [2, 3]
console.log(splice([1, 2, 3], 1, 0)); // []
console.log(splice([1, 2, 3], 0, 1)); // [1]
console.log(splice([1, 2, 3], 1, 0, 'a')); // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two')); // [2]
console.log(arr2); // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three')); // [2, 3]
console.log(arr3); // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0)); // []
console.log(splice(arr4, 1, 0, 'a')); // []
console.log(arr4); // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a')); // []
console.log(arr5); // ["a", 1, 2, 3]

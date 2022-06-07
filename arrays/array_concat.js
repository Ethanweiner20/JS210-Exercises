// Array Concat

/*
Requirements:
- New array object elements should reference same objects as original array
- New array primitive elements should be copies of original array primitives
- The second argument can be another value
*/

function concat(...parts) {
  const combined = [];
  parts.forEach((part) => append(combined, part));
  return combined;
}

function append(array, value) {
  if (Array.isArray(value)) {
    for (let index = 0; index < value.length; index++) {
      array.push(value[index]);
    }
  } else {
    array.push(value);
  }
}

console.log(concat([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3)); // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three'])); // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four')); // [2, 3, "four"]

const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray); // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray); // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3); // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3); // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3; // or, `arr3[5]['b'] = 3;`
console.log(obj); // { a: "two", b: 3 }

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two'])); // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4)); // [1, 2, "three", 4]

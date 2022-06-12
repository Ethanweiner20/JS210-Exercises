'use strict';

// Array Copy

function copyArrayV1(arr) {
  const newArray = [];

  for (let index = 0; index < arr.length; index++) {
    newArray.push(arr[index]);
  }

  return newArray;
}

function copyArrayV2(arr) {
  return arr.slice();
}

let myArray = [1, 2, 3, 4];
const myOtherArray = copyArrayV1(myArray);

myArray.pop();
console.log(myOtherArray); // Should still be `[1, 2, 3, 4]`

myArray = [1, 2];
console.log(myOtherArray); // Same here

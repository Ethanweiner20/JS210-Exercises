// Combine Two Lists

function interleave(arr1, arr2) {
  return arr1.reduce(
    (result, el1, index) => result.concat(el1, arr2[index]),
    []
  );
}

function interleave(arr1, arr2) {
  return arr1.flatMap((el1, index) => [el1, arr2[index]]);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]

// Combining Arrays

// function union(...arrs) {
//   const result = [];
//   arrs.forEach((arr) => copyUniques(result, arr));
//   return result;
// }

// function copyUniques(result, arr) {
//   arr.forEach((element) => {
//     if (!result.includes(element)) result.push(element);
//   });
// }

// Clever: Using Sets

function union(...arrs) {
  return [...new Set([].concat(...arrs))];
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]

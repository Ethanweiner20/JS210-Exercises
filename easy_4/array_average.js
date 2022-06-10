// Array Average

// No need to provide initial value to `reduce`, because it will never be empty
function average(integers) {
  const avg = integers.reduce((sum, int) => sum + int) / integers.length;
  return Math.floor(avg);
}

console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40

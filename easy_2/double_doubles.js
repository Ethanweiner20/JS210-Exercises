// Double Doubles

function twice(number) {
  return isDouble(number) ? number : number * 2;
}

function isDouble(number) {
  const string = String(number);
  const midpoint = string.length / 2;
  return string.substring(0, midpoint) === string.substring(midpoint);
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676

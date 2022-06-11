// Get the Middle Character

// e.g. length = 6 -> middleStart = 6 / 2 - 1 = ceil(2) = 2
// e.g. length = 5 -> middleStart = 5 / 2 - 1 = ceil (1.5) = 2

function centerOf(string) {
  const length = string.length;
  const middleStart = Math.ceil(length / 2 - 1);
  const middleEnd = middleStart + (length % 2 === 0 ? 2 : 1);
  return string.substring(middleStart, middleEnd);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School')); // " "
console.log(centerOf('Launch')); // "un"
console.log(centerOf('Launchschool')); // "hs"
console.log(centerOf('x')); // "x"

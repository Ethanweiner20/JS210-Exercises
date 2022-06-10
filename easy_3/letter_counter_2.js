// Letter Counter Part 2

function wordSizes(string) {
  const sizes = string
    .split(' ')
    .map((word) => word.replace(/[^a-z]/gi, '').length)
    .filter((size) => size > 0);
  return tally(sizes);
}

function tally(array) {
  return array.reduce((counts, element) => {
    counts[element] = counts[element] ? counts[element] + 1 : 1;
    return counts;
  }, {});
}

console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 2, }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 3, }
console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes('')); // {}

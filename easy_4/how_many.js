'use strict';

// How Many

function countOccurrences(vehicles) {
  const counts = tally(vehicles);
  logOccurrences(counts);
}

function tally(array) {
  const counts = {};

  array.forEach((element) => {
    counts[element] = counts[element] ? counts[element] + 1 : 1;
  });

  return counts;
}

function logOccurrences(counts) {
  for (let vehicle in counts) {
    console.log(`${vehicle} => ${counts[vehicle]}`);
  }
}

const vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

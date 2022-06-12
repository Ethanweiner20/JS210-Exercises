'use strict';

// How Big is the Room

const rlSync = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

console.log('Enter the length of the room in meters:');
const length = parseFloat(rlSync.prompt());

console.log('Enter the width of the room in meters:');
const width = parseFloat(rlSync.prompt());

const areaSqMeters = length * width;
const areaSqFeet = areaSqMeters * SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${areaSqMeters.toFixed(2)} square meters \
(${areaSqFeet.toFixed(2)}) square feet.`);

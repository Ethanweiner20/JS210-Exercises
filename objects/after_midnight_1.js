// After Midnight Part 1

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

// Idea: Create a date object (arbitrary day) w/ a time of midnight
// Create a new date object w/ the time of the original date object plus the
// given minutes (as milliseconds)
// Return a string w/ hours + minutes (using `padWithZeroes`)
function timeOfDay(deltaMinutes) {
  const midnight = new Date('January 1, 2000, 00:00:00');
  const adjustedDate = new Date(
    midnight.getTime() + minutesToMilliseconds(deltaMinutes)
  );
  const hoursString = padWithZeroes(adjustedDate.getHours(), 2);
  const minutesString = padWithZeroes(adjustedDate.getMinutes(), 2);
  return `${hoursString}:${minutesString}`;
}

function minutesToMilliseconds(minutes) {
  return minutes * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
}

console.log(timeOfDay(0)); // "00:00"
console.log(timeOfDay(-3)); // "23:57"
console.log(timeOfDay(35)); // "00:35"
console.log(timeOfDay(-1437)); // "00:03"
console.log(timeOfDay(3000)); // "02:00"
console.log(timeOfDay(800)); // "13:20"
console.log(timeOfDay(-4231)); // "01:29"

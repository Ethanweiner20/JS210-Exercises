// Cute Angles

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const DEGREES_PER_REVOLUTION = 360;

// Option 1: Convert to seconds -> rebuild to degrees/minutes/seconds
function dms(angle) {
  const totalSeconds = angle * MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;
  const seconds = Math.floor(totalSeconds % SECONDS_PER_MINUTE);
  const totalMinutes = Math.floor(totalSeconds / SECONDS_PER_MINUTE);
  const minutes = totalMinutes % MINUTES_PER_DEGREE;
  const degrees = normalizeDegrees(
    Math.floor(totalMinutes / MINUTES_PER_DEGREE)
  );
  const padZeroes = (number) => String(number).padStart(2, '0');

  return `${padZeroes(degrees)}${DEGREE}${padZeroes(minutes)}'${padZeroes(
    seconds
  )}`;
}

// Option 2: Iterative subtraction of the larger unit
// function dms(angle) {
//   angle = normalizeDegrees(angle);
//   const degrees = Math.floor(angle);
//   const remainingMinutes = (angle - degrees) * MINUTES_PER_DEGREE;
//   const minutes = Math.floor(remainingMinutes);
//   const remainingSeconds = (remainingMinutes - minutes) * SECONDS_PER_MINUTE;
//   const seconds = Math.floor(remainingSeconds);
//   const padZeroes = (number) => String(number).padStart(2, '0');

//   return `${padZeroes(degrees)}${DEGREE}${padZeroes(minutes)}'${padZeroes(
//     seconds
//   )}`;
// }

function normalizeDegrees(degrees) {
  return (
    ((degrees % DEGREES_PER_REVOLUTION) + DEGREES_PER_REVOLUTION) %
    DEGREES_PER_REVOLUTION
  );
}

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"

console.log(dms(-1)); // 359°00'00"
console.log(dms(400)); // 40°00'00"
console.log(dms(-40)); // 320°00'00"
console.log(dms(-420)); // 300°00'00"

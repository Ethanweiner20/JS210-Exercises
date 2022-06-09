// Caller

function makeDoubler(caller) {
  return function (number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };
}

const victorDoubler = makeDoubler('Victor');
console.log(victorDoubler(5));
console.log(victorDoubler(10));

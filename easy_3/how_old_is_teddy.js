'use strict';

// How Old is Teddy

function randInRange(min, max) {
  const range = max - min;
  return min + Math.floor(Math.random() * range + 1);
}

console.log(`Teddy is ${randInRange(20, 200)} years old!`);

/*
Further Exploration:

Using `Math.round()` would make a difference. It would reduce the probability of
`min` being returned, there the chance of `Math.round(Math.random() * range + 1)`
returning 0 reduces by 50%. Furthermore, the function could return `max + 1`,
because `Math.round` might round the expression to a number 1 higher than the
range.

We can make the function more robust by using the absolute value of the
difference between `min` and `max` for the range and conditionally guarantee
that the smaller of the two is used as the offset.

*/

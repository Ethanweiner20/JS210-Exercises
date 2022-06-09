# Product of Sums

```js
function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}
```

It will not produce the expected result, because nothing is explicitly returned from `total`, so the return value of the `total` function invocation is `undefined`. `undefined` will be coerced to `NaN` by the `*` operator, so the final `result` will be `NaN`, no matter the inputs.

A secondary issue is the lack of initialization of `sum` in function `total`. When `sum` is incremented by a number in `numbers`, it will attempt to add `undefined` to a number. `undefined` will be coerced to `NaN`, so the addition will fail and the final value of `sum` will be `NaN`.

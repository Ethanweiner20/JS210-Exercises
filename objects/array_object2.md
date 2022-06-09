# Array Object Part 2

```js
const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);
```

The user is incorrect, because the `sum` is `20`, but `array.length` is only `2`, resulting in a return value of `10`. When computing the sum, the user includes all four properties on `myArray`. Even though the keys `'-1'` and `'-2'` aren't associated with standard array elements, they can still be accessed using bracket notation, and the for loop does so. The `length` property, however, only counts standard array elements with non-negative integer indexes, of which there are only 2.

## Refactoring

```js
const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

average(myArray);
```

# Oddities

```js
function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6]; // false
oddities(['abc', 'def']) === ['abc']; // false
```

Even though the righthand sides of the comparisons accurately describes the values returned by the `oddities` invocations, the comparisons return false because the `===` operator compares objects (including arrays) by their reference, not value, but the arrays on each side of the operator are two separate arrays with distinct locations in memory.

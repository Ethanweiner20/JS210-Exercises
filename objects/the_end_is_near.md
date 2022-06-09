# The End is Near But Not Here

```js
function penultimate(string) {
  return string.split(' ')[-2];
}

penultimate('last word'); // expected: "last"
penultimate('Launch School is great!'); // expected: "is"
```

As the `penultimate` function is written, it tries to access the value in the split string array at the index `'-2'`, which is nonexistent on the array. It does not access the second-to-last element in the array, as might be expected. In order to access the second to last element, we can compute an index by subtracting from the length of the result array. Another option is to use `slice`, which supports negative indices.

## Working Solution

```js
function penultimate(string) {
  return string.split(' ').slice(-2, -1);
}

penultimate('last word'); // expected: "last"
penultimate('Launch School is great!'); // expected: "is"
```

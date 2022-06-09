# Mutation

```js
const array1 = [
  'Moe',
  'Larry',
  'Curly',
  'Shemp',
  'Harpo',
  'Chico',
  'Groucho',
  'Zeppo',
];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]); // array2: ['Moe', 'Larry', ...]
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase(); // array1: [... 'CURLY', ... 'CHICO',...]
  }
}

console.log(array2);
```

The code will log the values originally in array1. The reassignment of elements in `array1` has no effect on the elements in `array2`, because `array1` and `array2` reference two separate arrays. Even though the arrays share elements, none of the shared elements are mutated (`toUpperCase` is non-mutating and strings as a whole are immutable). Reassignment causes the array to reference a new value, not mutate values it already references.

## Further Exploration

1. Yes. The arrays would reference the same shared object, and objects are mutating, so mutating the object via one array affects the other array.
2. Instead of solely reassigning elements of `array1`, I could also perform reassignment to the same elements in `array2`: `array2[i] = array1[i].toUpperCase()`. Another (simpler) option would be to directly assign `array1` to `array2`. Now, both variables reference the same array, so any changes made to the array will affect both variables.

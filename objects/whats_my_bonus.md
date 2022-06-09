# What's my Bonus

```js
function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true); // 1400
calculateBonus(1000, false); // 0
calculateBonus(50000, true); // 25000
```

The function works because the built-in `arguments` object contains any arguments passed into the function, regardless of whether these arguments were named or not. `arguments` is Array-like, allow for its bracket-based indexing.

# What's My Value?

```js
const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);
console.log(Object.keys(array).length);

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);
```

```
3
4
3
5
```

The output can be explained by the fact that the `length` property only counts actual array elements: properties on the array with a non-negative integer index. The addition of keys `'3.4'` and `'-2'` thus have no effect on `length`. However, the array returned by `keys` includes all keys on the array object, so its `length` is affected by the additions.

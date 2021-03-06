# Length

```js
const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', < empty item >]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['Javascript]
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['Javascript, < empty item x 2 >]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['Javscript', < empty item >, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3
```

The results can all be traced to the fact that `length` is a writable property of arrays and `length` includes unset elements in its count. Increasing `length` adds empty slots, while decreasing `length` truncate the array.

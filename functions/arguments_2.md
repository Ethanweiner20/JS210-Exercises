# Arguments Part 2

```js
let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);
```

The code will log `7` because the argument `a` in `myValue` is a separate local variable that shadows the global variable `a`. The reassignment in `myValue` takes place on the local variable `a`, which has no effect on global variable `a` because reassignment is non-mutating. Therefore, when the global `a` is logged, its value is still `7`.

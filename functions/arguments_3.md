# Arguments Part 3

```js
let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);
```

The code will log `[1, 2, 10]`. The invocation of `myValue` passes the value of `a` to the function, which is a reference to the array `[1, 2, 3]`. Therefore, the argument `b` is assigned to this reference. Because indexed assignment is mutating (and because arrays are mutable), line 4 mutates the array referenced by `b`, which is also referenced by `a`. Therefore, when `a` is output on line 8, its value has been mutated.

# Arguments Part 1

```js
let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);
```

The code logs `7` to the console. The invocation of `myValue` merely introduces a new local variable `b`, assigned to the value `7`. Because this local variable is separate from `a`, its reassignment has no impact on `a`, since reassignment merely affects the value stored in the variable, not the value itself. Since the value passed in is a primitive value, no mutating operations exist on it, so it's impossible to affect the value stored in `a` without referencing `a` itself.

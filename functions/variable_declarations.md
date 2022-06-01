# Variable Declarations

```js
console.log(a);

var a = 1;
```

The code will log `undefined`. Under the hoisting model, the declaration of variable `a` moves to the top of the program. However its value is yet to be set, so `undefined` is logged to the console, before it is reassigned to `1`. Applying a different perspective, during the creation phase in the global execution context, an uninitalized variable `a` is introduced into global scope. Therefore, during the execution phase, Javascript resolves `a` to `undefined`. It resolves to `undefined` because of its declaration with `var`.

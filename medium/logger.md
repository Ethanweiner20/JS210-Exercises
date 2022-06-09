# Logger

```js
function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();
```

Scope perspective:

The variable `status` is locally scoped to the `debugIt` function, and so is accessible within the inner scope of `logger`, due to lexical scoping rules.

Closures perspective:

During the creation of function `logger`, local variable `status` is available in the surrounding lexical environment, so it is included in the closure of `logger`. Therefore, when `debugIt` is invoked, which invokes `logger`, line 4 can access `status` via `logger`'s closure.

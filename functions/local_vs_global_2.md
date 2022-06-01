# Local vs Global Part 2

```js
var myVar = "This is global";

function someFunction() {
  var myVar = "This is local";
  console.log(myVar);
}

someFunction();
```

```
This is local
```

The `someFunction` invocation on line 8 introduces a local variable `myVar` scoped to `someFunction`, which shadows the globally scoped `myVar`. Therefore, line 5 outputs `'This is local'`. Despite the globally scoped `myVar` being included in the closure of `someFunction`, the locally scoped `myVar` is prioritized. Within a function, the local scope is searched before the function's closure.

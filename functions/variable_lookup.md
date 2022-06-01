# Variable Lookup

```js
var myVar = "This is global";

function someFunction() {
  console.log(myVar);
}

someFunction();
```

The code will log `This is global` because `myVar` on line 4 references the globally scoped `myVar` declared on line 1. Once again, this is a result of the closure formed during the definition of `someFunction`. During the invocation of `someFunction`, the local scope of `someFunction` is searched first, followed by its closure, which organizes the scope hierarchically.

# Local vs Global Part 3

```js
var myVar = "This is global";

function someFunction() {
  myVar = "This is local";
}

someFunction();
console.log(myVar);
```

Upon the invocation of `someFunction`, line 5 reassigns global variable `myVar` to `"This is local"`, so the output on line 9 outputs `"This is local"`. More specifically, `someFunction` forms a closure which includes a pointer to the globally scoped `myVar`, so `someFunction` can access and reassign this global variable. The lexical scope is not searched during execution.

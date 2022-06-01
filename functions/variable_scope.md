# Variable Scope

```js
function someFunction() {
  myVar = "This is global";
}

someFunction();
console.log(myVar);
```

Upon the invocation of `someFunction`, a new property `myVar` is added to the global object. This occurs because the global object is implicitly prepended to `myVar` upon assignment. Line 9 outputs this property, whose value is `"This is global"`, which also implicitly accesses the global object to search for `myVar`.

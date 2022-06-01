# Local vs Global Part 1

```js
var myVar = "This is global";

function someFunction() {
  var myVar = "This is local";
}

someFunction();
console.log(myVar);
```

```
This is global
```

`myVar` declared on line 4 is scoped locally to `someFunction`, so it is invisible on line 8. Therefore, `myVar` on line 8 resolves to the `myVar` global variable declared on line 1.

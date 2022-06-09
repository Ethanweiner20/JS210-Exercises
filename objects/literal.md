# Literal

```js
const myObject = {
  a: 'name',
  b: 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;
```

The bug occurs at `myObject[a]`. Bracket notation expects a value for purposes of indexing, but `a` is not a value nor does it reference any declared variable containing a value. Therefore, a `ReferenceError` error will be raised, stating that there is no identifier named `a`.

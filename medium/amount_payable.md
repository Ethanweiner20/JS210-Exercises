# Amount Payable

```js
let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + item * quantity;
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
```

`40, 45`; Because `startingBalance` is in the surrounding lexical environment of the `totalPayable` function definition, `totalPayable` includes a pointer to `startingBalance` in its closure. As a result, the reassignments of `startingBalance` have an effect on following invocations of `totalPayable`. Since the closure contains a pointer to `startingBalance`, not the value of `startingBalance` itself, it can dynamically update upon successive reassignments.

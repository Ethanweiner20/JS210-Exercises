# Multiplication Table

```js
function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:
      return `  ${stringNumber}`;
    case 2:
      return ` ${stringNumber}`;
    default:
      return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}
```

The code will not produce the expected result, because the outer iteration terminates at `i = 9`, not `i = 10`. Therefore, only the multiplication table for the numbers `1` to `9` wil be logged to the console.

# Function Declarations

Question: Do function declarations create a variable?

```js
logValue();

function logValue() {
  console.log("Hello, world!");
}
```

The code logs `'Hello, world!'`. Javascript first declares the `logValue` function, which associates the function name with its definition. During execution, therefore, `logValue` is in scope and can be called. Under the hoisting model, the `logValue` function declaration is hoisted to the top of the code.

## Further Exploration

Now, the code logs `string`. This is because the declaration of `logValue`, under the hoisting model, is hoisted above variable declarations. Functions declarations take effect before variable declarations. When the function is declared, its value is assigned to a variable named `logValue`. Next, the variable declaration occurs, followed by the assignment to the string `'foo`'. Therefore, at the time of ouput, `logValue` is a string.

The hoisted equivalent is:

```js
let logValue = function logValue() {
  console.log("Hello, world!");
};

var logValue; // Redundant (can be removed)

logValue = "foo";

console.log(typeof logValue);
```

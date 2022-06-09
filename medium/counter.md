# Counter

1. `The total value is 15`
2. `The total value is NaN`
3. `The total value is 15`
4. `SyntaxError` on line 4

The first 3 results can be explained by the fact that function declarations are hoisted above variable declarations, so the `var` declarations of `counter` are redundant. Based on the equivalent hoisted versions, snippets 1 and 3 assign `counter` the value `15` before output, while snippet 2 attempts to concatenate the `Function` value of `counter` with `rate`, resulting in `NaN`, before it is reassigned to `15`. The last result owes itself to the behavior of `let`: if a variable is already declared (like `counter`), it cannot be declared again with `let`. This contrasts `var` declarations, which can occur multiple times for the same variable name without error.

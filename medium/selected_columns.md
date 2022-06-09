# Selected Columns

```js
/*
Example:
rows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
cols = [0, 2]

2 iterations on both inner/outer loops (0, 2)
*/
function getSelectedColumns(rows, cols) {
  var result = [];

  let length = rows.length;
  for (var i = 0; i < length; i += 1) {
    let length = cols.length;
    for (var j = 0; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = rows[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const array2 = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

getSelectedColumns(array1, [0]); // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]); // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]); // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]
```

The problem lies in the assignment of `length` on lines 4 and 5. Line 5 reassigns the `length` variable declared on line 4, so the termination condition for the outer loop is not what was expected. Instead of `length` being `numbers.length`, `length` is `cols.length`, which may not be equal to `numbers.length`. Therefore, the termination condition of the outer loop is effectvely `i < cols.length`. This explains the missing elements from the columns: the iteration over the rows is cut short, so the final values of the columns are not included. For example, if `cols.length` is `2`, then the resulting columns in the return value will only contain 2 elements, despite the actual columns containing `numbers.length` elements.

To fix this problem, we could declare `length` with `let` or `const` instead of `var`, which would give it block scope. This way, two separate `length`s would exist, the inner one shadowing the outer one.

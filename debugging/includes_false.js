// Includes False

function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}
                                                                    // returns:
includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
includesFalse([9422, 'lambda', true, 0, '54', null]);             // true

/*

`includesFalse` uses loose equality to check whether an element is
`false`. When the element `0` and `null` from the array on line 15
is compared to `false`, `true` is returned, causing the unexpected return value
`true` from the function.

*/
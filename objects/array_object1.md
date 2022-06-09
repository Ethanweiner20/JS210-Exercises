# Array Object Part 1

```js
const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);
```

The code will log:

```
a
undefined
d
5
['a', 'b', 'c', 'f', '-1': 'd', e: 5]
```

Line 4 attempts to access the key `'-1'` on `myArray`, which is nonexistent at this point. Referencing a nonexistent key returns `undefined`. However, after the assignments on lines 6-8, the keys accessed by lines 10-11 exist, and so can be logged to the console. Logging an array includes both elements and non-elements, so we can see the key-value pairs for the keys '-1' and 'e' in the final output, along with the addition of the element 'f' at index `3`. When the array is logged, only the values associated with non-negative integer keys are ouptut (since they are standard array elements). For all other properties, the entire key-value pair is output.

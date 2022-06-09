# Dynamic

```js
const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

/*
{
  'prop1': '123',
  'prop2': '456',
  'prop 3': '345',
  '456': '678' 
}
*/

console.log(myObject[prop2]);
console.log(myObject.prop2);
```

The code will log `678` and `456`. Line 11 retrieves the value for the key '456', because bracket notation evaluates the passed in expression, and `prop2` evaluates to '456'. This key was reassigned to `'678'` on line 9. Line 12 retrieves the value for the key 'prop2', because dot notation interprets the string following the dot as the literal key itself. This key was reassigned to `'456'` on line 8.

## Further Exploration

```js
const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);
```

```
{ 'funcProp': 'hello, ' }
{ 'funcProp': 'world!' }
```

The return value of the `myFunc` invocations is first used to add a property with the key `'funcProp'` to `myObj`, and then used to reassign the same property on line 9. This explains the difference between the two outputs.

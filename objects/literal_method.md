# Literal Method

```js
const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
```

The last line does not invoke the functions stored in the `firstName` or `lastName` keys of `person`: it merely references the functions themselves. This is possible because functions are first-class values. Since they are used in string interpolation, which performs implicit coercion, the last line will output the string representations of the 2 functions.

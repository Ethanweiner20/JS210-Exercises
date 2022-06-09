# Equal

```js
const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson); // false -- expected: true
```

`===` compares objects by refence, not value. `person` and `otherPerson` reference two separate objects, so comparing them with `===` returns `false`.

Potential refactorings include comparing the names of each person, or assigning both variables to same object:

```js
const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);
```

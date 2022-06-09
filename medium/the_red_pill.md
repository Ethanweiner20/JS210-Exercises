# The Red Pill

```js
function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);
```

```
Welcome
to
the
Matrix!
```

- `one` is invoked
  - `anotherAnotherOne` is invoked
    - Logs 'Welcome'
    - Invokes `anotherOne` with 2 arguments
      - Logs 'to'
  - Invokes `anotherOne` with 3 arguments
    - Logs 'the'
  - Returns `anotherOne`
- `anotherOne` is invoked with 7 arguments
  - Logs 'Matrix!'

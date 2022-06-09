# Conditional Loop

```js
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}
```

The program will run into an infinite loop, because it does not increment when `i % 3 === 0`. If `i` is not incremented on an iteration, the same logic will run on the next iteration, and `i` will still not be incremented, resulting in an infinite loop. In this instance, the infinite loop begins when `i` is `0`, so `0` is logged to the console infinitely.

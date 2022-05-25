// String Assignment

const name = "Bob";
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

// The code logs 'Bob', 'Bob', because the invocation of `toUpperCase()` is
// non-mutating, and so has no effect on the value stored in `name`.
// More generally, strings in Javascript are immutable, so the value of a
// variable containing a string can only occur by reassignment, which does
// not occur here.

/*

This is possible because of the idea of wrappers. At runtime, the String
primitive is wrapped with a `String` object, from which prototype methods can
be invoked.

*/

// Hello Friends!

function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

/*
On line 15, `randomGreeting` is never invoked, so its value, which is a
function, is assigned to `greeting`. During string interpolation, the string
representation of the function is used.

Furthermore, even if `randomGreeting` was invoked, it has no explicit return
value, and so returns `undefined`.
*/
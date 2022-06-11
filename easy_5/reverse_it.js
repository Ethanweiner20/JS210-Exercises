// Reverse It

function reverseWords(string) {
  function reverseWord(word) {
    let reversed = '';
    for (let index = word.length - 1; index >= 0; index--) {
      reversed += word[index];
    }
    return reversed;
  }
  return string
    .split(' ')
    .map((word) => (word.length >= 5 ? reverseWord(word) : word))
    .join(' ');
}

console.log(reverseWords('Professional')); // "lanoisseforP"
console.log(reverseWords('Walk around the block')); // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School')); // "hcnuaL loohcS"

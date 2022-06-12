'use strict'

// Name Swapping

function swapName(fullName) {
  const [first, last] = fullName.split(' ');
  return `${last}, ${first}`;
}

function swapName(fullName) {
  return fullName.replace(/(\S+)\s(\S+)/, '$2, $1');
}

console.log(swapName('Joe Roberts')); // "Roberts, Joe"

function swapFullName(fullName) {
  const parts = fullName.split(' ');
  const last = parts.pop();
  return `${last}, ${parts.join(' ')}`;
}

function swapFullName(fullName) {
  return fullName.replace(/(.+)\s(\S+)/, '$2, $1');
}

console.log(swapFullName('Noah Odlin Colson')); // "Colson, Noah Odlin"

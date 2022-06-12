'use strict';

// Right Triangles

function triangle(n) {
  const lines = [];

  for (let numStars = 1; numStars <= n; numStars++) {
    let numSpaces = n - numStars;
    lines.push(createLine(numStars, numSpaces));
  }

  lines.forEach((line) => console.log(line));
}

const createLine = (numStars, numSpaces) =>
  ' '.repeat(numSpaces) + '*'.repeat(numStars);

triangle(5);
triangle(9);
triangle(1);

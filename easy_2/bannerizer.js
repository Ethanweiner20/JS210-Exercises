'use strict';

// Bannerizer

function logInBox(string) {
  const innerWidth = string.length + 2;
  const margin = `+${'-'.repeat(innerWidth)}+`;
  const padding = `|${' '.repeat(innerWidth)}|`;
  const text = `| ${string} |`;
  [margin, padding, text, padding, margin].forEach((line) => console.log(line));
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

function logInBoxWrapped(string, width) {
  // Truncate excess width
  if (width > string.length + 4) {
    width = string.length + 4;
  }

  if (width < 5) {
    width = 5;
  }

  const margin = `+${'-'.repeat(width - 2)}+`;
  const padding = `|${' '.repeat(width - 2)}|`;
  [margin, padding, ...generateLines(string, width), padding, margin].forEach(
    (line) => console.log(line)
  );
}

function generateLines(string, width) {
  const lineWidth = width - 4;
  let lines = [];
  let currentLine = '';

  for (let index = 0; index < string.length; index++) {
    currentLine += string[index];

    if (currentLine.length >= lineWidth) {
      lines.push(currentLine);
      currentLine = '';
    }
  }

  if (currentLine) lines.push(currentLine);

  return lines.map((line) => `| ${line} |`);
}

logInBoxWrapped('To boldly go where no one has gone before.', 10);
logInBoxWrapped('To boldly go where no one has gone before.', 50);
logInBoxWrapped('To boldly go where no one has gone before.', 3);

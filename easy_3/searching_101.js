// Searching 101

const rlSync = require('readline-sync');

function retrieveNumber(nth) {
  return rlSync.question(`Enter the ${nth} number: `);
}

const numbers = [];
numbers.push(retrieveNumber('1st'));
numbers.push(retrieveNumber('2nd'));
numbers.push(retrieveNumber('3rd'));
numbers.push(retrieveNumber('4th'));
numbers.push(retrieveNumber('5th'));

const lowerBound = rlSync.question('Input a lower bound: ');
const condition = (number) => number > lowerBound;
const found = numbers.find(condition);

console.log(`A number greater than ${lowerBound} \
${found ? 'appears' : 'does not appear'} in [${numbers.join(', ')}].`);

/*
Further Exploration

The current solution wouldn't quite work in the sense that we could no longer
use `includes`, because we aren't searching for a specific number. Instead,
we'd have to manually check the condition against each number in `numbers`.
*/

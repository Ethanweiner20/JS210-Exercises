'use strict';

'use strict'

// Invoice

function invoiceTotal(...amounts) {
  return amounts.reduce((sum, amount) => sum + amount, 0);
}

invoiceTotal(20, 30, 40, 50); // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40)); // does not work; how can you make it work?

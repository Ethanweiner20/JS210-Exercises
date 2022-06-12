// Shop Transactions

const transactionLog = [];

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  data = parseFloat(data);

  if (data) {
    transactionLog.push(data);
    alert('Thank you. Data accepted.');  
  } else {
    console.log('Data could not be converted to numerical amount.');
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());

/*
The problem: When invalid numerical input is provided, a `ReferenceError` is
raised with the message "error is not defined". This is because in the `catch`
block in `logTransaction`, the error itself is not included, so it is not
introduced into the scope of the `catch` statement.
*/
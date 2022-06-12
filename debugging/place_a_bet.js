// Place A Bet

function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  };

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

/*
`placeABet` raises a `ReferenceError`. Lines 2-4 constitutue a function
expression, not a function declaration, so the function `generateRandomInt` is
actually not introduced into the scope of `placeABet` during its creation.
Therefore, line 6 throws a `ReferenceError`. This behavior relates to how
named function expressions work: their name is only available from inside
the function.
*/
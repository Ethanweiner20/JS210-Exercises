// Stuck on Page 18

const totalPages = 364;
let energy = 100;

function read(currentPage = 1) {
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read(currentPage);
  } else {
    console.log('Done!');
  }
}

read();

/*
The stack overflow results from the recursive invocation of `read` on line 19.
Every time `read` is invoked, a new locally scoped `currentPage` is introduced
in the scope of the current `read` invocation with an initial value of 1. Since
the value of `currentPage` remains less than `totalPages` on every invocation
of `read`, the condition on line 18 evaluates to `true` and the recursive call
is invoked for every invocation of `read`, resulting in a stack overflow.

This can be solved by initializing `currentPage` in global scope.
*/
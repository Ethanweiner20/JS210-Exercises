# Array Copy

Line 6 logs `[1, 2, 3]` because both `myArray` and `myOtherArray` refence the same array object, which is mutated upon the invocation of `pop` on line 4.

Lin e 10 logs `[1, 2, 3]` because variable reassignment is non-mutating, and only affects the variable that was reassigned. Variables in Javascript are independent entities.

# Array Comparsion

# PROBLEM

_Explicit Requirements_:

- **Input**: Two arrays, `array1` and `array2`
- **Output**: A Boolean indicating whether `array1` and `aarray2` contain the same elements & counts of those elements

_Implicit Requirements_:

- For arrays to be equal, elements must be strictly equal (not loosely)
- Should be able to deal w/ duplicates

_Edge Cases_:

- Arrays are unequal lengths -> return false
- Arrays contain loosely equal elements: indexOf searches using strict equality

_Questions_:

- Must we compare non-primitive values?

_Initial Ideas and Mental Models_:

1. Check whether the counts of each element is the same
2. Make copies of the arrays -> iterate over one -> delete by value other

# EXAMPLES/TESTS

# DATA STRUCTURES

# ALGORITHM

## By Deletion

Given two arrays, `array1` and `array2`:

- For each element in `array1`:
  - Determine the index of that element in `array2Copy` (##indexOf)
  - If index is not found (-1) -> return false
  - Otherwise, delete the element from `array2Copy` and continue
- Return true (all searches & deletions occurred successfully)

_Sub-Problems_:

# CODE

_Implementation Details_:

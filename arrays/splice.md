# PROBLEM

_Explicit Requirements_:

- **Input**: An `array`, a `start`, a `deleteCount`, and `elements` for replacement
- **Side Effects**: Mutate the `array` such that `deleteCount` elements are deleted from the `start` index, replaced w/ `elements` as possible
- **Output**: RV: The removed elements

_Implicit Requirements_:

_Edge Cases_:

_Questions_:

_Initial Ideas and Mental Models_:

1. Delete first, replace after (try first)
2. Replace during deletion
3. Utilize a copy of the array

Possible simpler solution: Creating a new array that results from the splice + individually reassigning elements in old array to new array

- Create a new array, skipping iterations of the elements within the deletion range

# EXAMPLES/TESTS

# DATA STRUCTURES

# ALGORITHM

# High-Level Algorithm #1

- Delete the proper # of elements (capture RV)
- Insert the proper # of elements
- Return the deleted elements

## Deletion

e.g. [1, 2, 3, 4, 5, 6, 7, 8], 3, 2 => [1, 2, 3, 6, 7, 8]

Given an `array`, a `start` index, and a `deleteCount`:

- Create an empty array for the `removedElements`
- Assign the `newLength` to the length of the array, minus the `deleteCount`
- Iterate from `start` to the end of the array:
  - Append the current element of `array` to `removedElements`
  - Replace the current element with element `deleteCount` positions ahead
- Reassign the length of `array` to `newLength`
- Return `removedElements`

## Insertion

e.g. [1, 2, 3], 1, ['a', 'b'] -> [1, 'a', 'b', 2, 3]

Given an `array`, a `start` index, and `elements` to insert:

- Assign a `newLength` to the length of the array, plus the length of `elements`
- Iterate from `newLength - 1` down to `start`:
  - [Insertion] If the `index` is less than the `start` plus the length of `elements`:
    - Pop an element from `elements` and assign it the current `index` in `array`
  - [Shifting] Otherwise, assign the current `index` of `array` to the `index` minus the length of elements

# Using an Array Copy

e.g. [1, 2, 3, 4, 5, 6, 7, 8], 2, 3, ['a', 'b'] => [1, 2, 'a', 'b', 6, 7, 8]

[1, 2, 3, 4, 5, 6, 7, 8] -> [1, 2, 'a', 'b', 5, 6, 7] -> Replace w/ copy, starting at `deleteCount`

Given an `array`, a `start`, a `deleteCount`, and some `elements` for replacement:

- Create an `arrayCopy`
- Readjust the length of `array`
- Replace elements, starting from `start`, in `array` w/ `elements`
- Replace elements, starting from `start + elements.length` in `array` using the elements in `arrayCopy`, starting at `start + deleteCount`
- Return a slice of `arrayCopy` containing the delieted elements

_Sub-Problems_:

# CODE

_Implementation Details_:

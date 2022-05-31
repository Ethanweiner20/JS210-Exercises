# Number to String

# PROBLEM

- Input: An integer
- Output: String representation of integer

Problem: How to iterate over the digits in `integer`?

# EXAMPLES

# ALGORITHM

Given a non-negative `integer`:

- Assign a `digits_string` to empty
- For each `digit` in `integer` ##
  - Retrieve the string digit from the associated `DIGITS` array
  - Append the string digit to `digits_string`
- Return the `digits_string`

## Retrieve the digits in an integer

- Initialize an empty array of `digits`
- Set the `remaining` to `integer`
- While the `remaining` > 0
  - Determine the next `digit` by retrieving the remainder when dividing `remainder` by 10
  - Prepend the `digit` to `digits`
  - Reassign `remaining` to the floored `integer / 10` (`Math.floor`)
- Return the `digits`

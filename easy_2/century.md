# Century

# PROBLEM

- Input: Year
  - Assumption: Will be a positive integer (no BC centuries)
- Output: Century of that year, ending with the proper suffix
- Note: Centuries begin in years that end w/ 01 (e.g. 1901-2000)
- Focus on century # first, suffix 2nd

# EXAMPLES

# ALGORITHM

Given a `year`:

- Retrieve the century number ##
- Append the correct suffix ##

## Retrieve century number

Given a `year`:

- `normalized_year`: Add 100 and subtract 1 from the year
- Divide the `normalized_year` by 100 and floor to nearest integer
- Return the result

Example: 2000 -> 2100 -> 2099 -> 20
Example: 2001 -> 2101 -> 2100 -> 21
Example: 5 -> 105 -> 104 -> 10

## Append suffix to number (as string)

Use simple conditional logic based on last digit in string

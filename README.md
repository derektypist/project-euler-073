# Project Euler 073 - Counting Fractions in a Range

Consider the fraction, n/d, where n and d are positive integers.  If n &lt; d and HCF(n,d) = 1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for d &le; 8 in ascending order of size, we get:

1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, <strong>3/8, 2/5, 3/7,</strong> 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8

It can be seen that there are 3 fractions between 1/3 and 1/2.

How many fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d &le; `limit`?

Information at [Project Euler 073](https://projecteuler.net/problem=73)

## UX

**Getting Started**

In the input field, enter a whole number between 8 and 12000 (without leading zeros such as 08) and select the Submit Button.  Unless you have made an invalid input, you will see the number of fractions lying between 1/3 and 1/2 in the sorted set of reduced proper fractions for d &le; limit as well as the limit you have entered.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 8 or greater than 12000
- Including leading zeros such as 08
- Entering a number, but it is not an integer

As a user, if I select the Reset Button, I can clear the information or start again.

As a user, if I enter 8 and select the Submit Button, I expect the function `countingFractionsInARange(8)` to return a number.

As a user, if I enter 8 and select the Submit Button, I expect the function `countingFractionsInARange(8)` to return 3.

As a user, if I enter 1000 and select the Submit Button, I expect the function `countingFractionsInARange(1000)` to return 50695.

As a user, if I enter 6000 and select the Submit Button, I expect the function `countingFractionsInARange(6000)` to return 1823861.

As a user, if I enter 12000 and select the Submit Button, I expect the function `countingFractionsInARange(12000)` to return 7295372.

User Stories on function `countingFractionsInARange(limit)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 073](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-73-counting-fractions-in-a-range)

**Information Architecture**

The function `countingFractionsInARange(limit)` returns a number, where `limit` is a number between 8 and 12000.


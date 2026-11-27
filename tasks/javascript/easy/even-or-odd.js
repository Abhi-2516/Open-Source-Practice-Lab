/*
TASK: Even or Odd

Check whether a given number is even or odd.

Input:
7

Output:
"Odd"
*/

const num = 6;

// TODO: Write your solution here
function evenOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}
const result = evenOdd(num);

console.log(result);

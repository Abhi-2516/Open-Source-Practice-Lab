/*
TASK: Count Vowels

Count the number of vowels in a given string.

Input:
"opensource"

Output:
5
*/

const str = "opensource";

// TODO: Write your solution here

const couterVowels = (str) =>
  str
    .split("")
    .reduce(
      (count, char) => ("aeiouAEIOU".includes(char) ? count + 1 : count),
      0,
    );
const count = couterVowels(str);
console.log(count);

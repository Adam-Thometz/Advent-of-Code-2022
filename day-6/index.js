const fs = require('fs');
const input = fs.readFileSync('input.txt', { encoding: 'utf-8' })


function getUniqueSubset(input) {
  let start = 0;
  // Set end to 4 for Part 1, 14 for Part 2
  let end = 14;
  while (end < input.length) {
    const subset = input.slice(start, end);
    const foundLetters = new Set();
    for (let char of subset) {
      foundLetters.add(char);
    }
    if (foundLetters.size === subset.length) return end;
    start++;
    end++;
  }
}

console.log(getUniqueSubset(input));
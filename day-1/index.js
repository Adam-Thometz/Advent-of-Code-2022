// Find the elf carrying the most snacks according to input.txt

const fs = require('fs');
const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n')
console.log(input)

// Steps:
// Initialize a current elf calorie count at 0
// Initialize an empty array
// Loop through the entire output
  // If there is a number, add it to the current elf calorie count
  // Otherwise, push calorie count into array and reset elf calorie count to 0

let currentElfCalorieCount = 0
let elves = [];

for (let amount of input) {
  if (!amount) {
    elves.push(currentElfCalorieCount);
    currentElfCalorieCount = 0
  } else {
    currentElfCalorieCount += parseInt(amount);
  }
}

// Part 1
console.log(Math.max(...elves));

// Part 2
const sortedElves = elves.sort((a, b) => b - a);
console.log(sortedElves.slice(0, 3).reduce((a,b) => a + b))
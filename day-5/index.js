const fs = require('fs');
const info = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n');
const splitPoint = info.indexOf('');

const stackInfo = info.slice(0, splitPoint-1);
const crateStacks = Array.from(Array(9)).map(() => []);

for (let i = stackInfo.length-1; i >= 0; i--) {
  const currLine = stackInfo[i];
  for (let j = currLine.length-2; j >= 0; j -= 4) {
    if (currLine[j] === ' ') continue;
    const stackToAddTo = j / 4 - 0.25;
    crateStacks[stackToAddTo].push(currLine[j])
  }
}

const directionInfo = info.slice(splitPoint+1);
const directions = []
for (let direction of directionInfo) {
  const directionArr = direction.split(' ');
  const instructions = {};
  for (let i = 1; i < directionArr.length; i += 2) {
    if (i === 1) instructions.move = +directionArr[i];
    if (i === 3) instructions.from = +directionArr[i];
    if (i === 5) instructions.to = +directionArr[i];
  };
  directions.push(instructions);
};

// Part 1
// for (let direction of directions) {
//   const { move, from, to } = direction;
//   for (let i = 1; i <= move; i++) {
//     const crate = crateStacks[from-1].pop();
//     crateStacks[to-1].push(crate);
//   };
// };
// console.log(crateStacks.map(crate => crate.pop()).join(''))

// Part 2
for (let direction of directions) {
  const { move, from, to } = direction;
  const cratesToMove = crateStacks[from-1].splice(crateStacks[from-1].length - move);
  crateStacks[to-1].push(...cratesToMove)
}
console.log(crateStacks.map(crate => crate.pop()).join(''))
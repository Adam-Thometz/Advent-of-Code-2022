const fs = require('fs');
const pairs = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n')
  .map(line => line.split(','));

  // Part 1
let numOfPairsToFix = 0;
for (let pair of pairs) {
  const [elf1Start, elf1End] = pair[0].split('-').map(num => parseInt(num));
  const [elf2Start, elf2End] = pair[1].split('-').map(num => parseInt(num));
  console.log(elf1Start, elf1End, elf2Start, elf2End);

  const elf1ContainsElf2 = elf1Start <= elf2Start && elf2End <= elf1End;
  const elf2ContainsElf1 = elf2Start <= elf1Start && elf1End <= elf2End;
  if (elf1ContainsElf2 || elf2ContainsElf1) numOfPairsToFix++;
}

console.log('Answer to Part 1:', numOfPairsToFix);

// Part 2
numOfPairsToFix = 0;
for (let pair of pairs) {
  const [elf1Start, elf1End] = pair[0].split('-').map(num => parseInt(num));
  const [elf2Start, elf2End] = pair[1].split('-').map(num => parseInt(num));

  const overlap = (
    elf2Start <= elf1End && elf1Start <= elf2End
  ) || (
    elf1End <= elf2Start && elf2End <= elf1Start
  )
  if (overlap) numOfPairsToFix++;
}

console.log('Answer to Part 2', numOfPairsToFix)

// ....567..
// ......789
// elf1Start < elf1End && elf1Start <= elf2End

// ......789
// ....567..
// elf1End <= elf2Start && elf2End <= elf1Start
const fs = require('fs');
const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n');

// Dynamically create alphabet and arrange so that priority corresponds with index+1
const alphaLower = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 97));
const alphaUpper = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65));
const alphabet = alphaLower.concat(alphaUpper)

// Part 1
let totalPriority = 0;
for (let rucksack of input) {
  const mid = Math.floor(rucksack.length / 2);
  const compartment1 = createCompartment(rucksack.slice(0, mid));
  const compartment2 = createCompartment(rucksack.slice(mid));

  for (let i = 0; i < alphabet.length; i++) {
    const item = alphabet[i];
    if (compartment1[item] && compartment2[item]) totalPriority += i+1;
  }
}

console.log('Answer to part 1', totalPriority);

// Part 2
totalPriority = 0
const elfGroups = [];
for (let i = 0; i< input.length; i+=3) {
  const group = [];
  for (let j = i; j < i+3; j++) {
    group.push(input[j]);
  }
  elfGroups.push(group);
};

for (let group of elfGroups) {
  const elf1 = createCompartment(group[0]);
  const elf2 = createCompartment(group[1]);
  const elf3 = createCompartment(group[2]);
  for (let i = 0; i < alphabet.length; i++) {
    let item = alphabet[i]
    if (elf1[item] && elf2[item] && elf3[item]) totalPriority += i+1;
  }
}

console.log('Answer to part 2', totalPriority);

// helper function
function createCompartment(items) {
  const compartment = {};
  for (let item of items) {
    compartment[item]
      ? compartment[item] += 1
      : compartment[item] = 1
  };
  return compartment;
}
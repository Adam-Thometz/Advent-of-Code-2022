const fs = require('fs');
const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n');

const keyToPlay = {
  // opponent
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  // Part 1
  // self
  // X: 'rock',
  // Y: 'paper',
  // Z: 'scissors',
  // Part 2
  X: 'lose',
  Y: 'draw',
  Z: 'win'
}

const rules = {
  rock: {
    beats: 'scissors',
    losesTo: 'paper',
    value: 1
  },
  paper: {
    beats: 'rock',
    losesTo: 'scissors',
    value: 2
  },
  scissors: {
    beats: 'paper',
    losesTo: 'rock',
    value: 3
  }
};

let score = 0;

for (let round of input) {
  let total = 0;

  const [opponent, self] = round.split(' ');
  const opponentPlay = keyToPlay[opponent];
  // selfPlay in Part 1
  const plan = keyToPlay[self];

  // Add the value of your play off the bat
  // Call line 50 in part 2 only
  const selfPlay = createStrategy(plan, opponentPlay);
  total += rules[selfPlay].value;
  
  // Check if draw
  if (opponentPlay === selfPlay) total += 3;
  
  // Check if you win
  if (rules[selfPlay].beats === opponentPlay) total += 6;

  score += total;
}

function createStrategy(plan, opponentPlay) {
  if (plan === 'win') return rules[opponentPlay].losesTo;
  if (plan === 'lose') return rules[opponentPlay].beats;
  return opponentPlay;
}

console.log(score)
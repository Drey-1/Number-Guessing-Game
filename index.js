const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function task(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function gameLoop(difficult) {
  const secretNum = Math.floor(Math.random() * 100) + 1;
  let trys = 0;

  switch (difficult) {
    case 1:
      trys = 10;
      break;
    case 2:
      trys = 5;
      break;
    case 3:
      trys = 3;
      break;
    default:
      console.log("Invalid choice. Defaulting to Medium (5 tries).");
      trys = 5;
  }

  let attempts = 0;

  while (trys > 0) {
    const answer = await task("Try to guess the number: ");
    const guess = Number(answer);
    attempts++;
    trys--;

    if (guess === secretNum) {
      console.log(`Congratulations! You got the answer right in ${attempts} tries.`);
      return restartGame();
    } else if (guess > secretNum) {
      console.log("Incorrect! The number is lower than your guess.");
    } else {
      console.log("Incorrect! The number is greater than your guess.");
    }

    if (trys === 0) {
      console.log(`Game over! The secret number was ${secretNum}.`);
      return restartGame();
    }
  }
}

async function restartGame() {
  const answer = await task("Do you want to restart? (y/n): ");
  if (answer.toLowerCase() === "y") {
    start();
  } else {
    console.log("Thanks for playing!");
    rl.close();
  }
}

function start() {
  console.log(`
    Welcome to the Number Guessing Game!
    I'm thinking of a number between 1 and 100.
    You have 5 chances to guess the correct number.
    
    Please select the difficulty level:
    1. Easy (10 chances)
    2. Medium (5 chances)
    3. Hard (3 chances)
  `);

  rl.question("Enter your choice: ", (answer) => {
    const difficult = Number(answer);
    gameLoop(difficult);
  });
}

start();

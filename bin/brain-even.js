#!/usr/bin/env node

import readlineSync from 'readline-sync';

const playRound = () => {
  const guessingNum = Math.ceil(Math.random() * 100);
  const checkNum = guessingNum % 2;
  let correctAnswer = '';
  if (checkNum === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  console.log(`Question: ${guessingNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
};

const playGame = (userName) => {
  for (let i = 0; i < 3; i++) {
    const isCorrect = playRound();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
playGame(name);

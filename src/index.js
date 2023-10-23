import readlineSync from 'readline-sync';

export const getAnswerAndCheck = (guessingSubj, correctAnswer) => {
  console.log(`Question: ${guessingSubj}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const playGame = (gameIteration, gameQuestion, numOfRounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n${gameQuestion}`);
  for (let i = 0; i < numOfRounds; i += 1) {
    const isCorrect = gameIteration();
    if (!isCorrect) {
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

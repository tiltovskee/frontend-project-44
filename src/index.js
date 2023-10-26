import readlineSync from 'readline-sync';

const playGame = (roundData, gameQuestion, numOfRounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(`${gameQuestion}`);
  for (let i = 0; i < numOfRounds; i += 1) {
    const [questionData, correctAnswer] = roundData();
    console.log(`Question: ${questionData}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }
    console.log(`Congratulations, ${playerName}!`);
  }
  return null;
};

export default playGame;

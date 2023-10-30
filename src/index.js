import readlineSync from 'readline-sync';

const playGame = (roundData, question) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(question);
  for (let i = 0; i < roundsCount; i += 1) {
    const [questionData, correctAnswer] = roundData();
    console.log(`Question: ${questionData}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;

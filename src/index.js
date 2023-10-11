import readlineSync from 'readline-sync';

const getAnswerAndCheck = (guessingSubj, correctAnswer) => {
  console.log(`Question: ${guessingSubj}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default getAnswerAndCheck;

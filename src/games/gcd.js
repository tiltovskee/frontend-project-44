import { getAnswerAndCheck, playGame } from '../index.js';
import getNumber from '../helpers.js';

const playRound = () => {
  const num1 = getNumber(1, 10);
  const num2 = getNumber(1, 10);
  const numsForQuestion = `${num1} ${num2}`;
  let divisor = Math.min(num1, num2);
  let correctAnswer = '';
  while (correctAnswer === '') {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      correctAnswer = `${divisor}`;
    } else {
      divisor -= 1;
    }
  }
  return getAnswerAndCheck(numsForQuestion, correctAnswer);
};

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const playGcdGame = () => playGame(playRound, gameQuestion);

export default playGcdGame;

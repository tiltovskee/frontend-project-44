import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const getGreatestCommonDivisor = (number1, number2) => {
  let divisor = Math.min(number1, number2);
  let greatestCommonDivisor = '';
  while (greatestCommonDivisor === '') {
    if (number1 % divisor === 0 && number2 % divisor === 0) {
      greatestCommonDivisor = String(divisor);
    } else {
      divisor -= 1;
    }
  }
  return greatestCommonDivisor;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${number2}`;
  const answer = getGreatestCommonDivisor(number1, number2);
  return [question, answer];
};

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const playGcdGame = () => playGame(generateRound, gameQuestion);

export default playGcdGame;

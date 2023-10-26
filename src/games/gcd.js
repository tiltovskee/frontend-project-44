import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let divisor = Math.min(firstNumber, secondNumber);
  let greatestCommonDivisor = '';
  while (greatestCommonDivisor === '') {
    if (firstNumber % divisor === 0 && secondNumber % divisor === 0) {
      greatestCommonDivisor = `${divisor}`;
    } else {
      divisor -= 1;
    }
  }
  return greatestCommonDivisor;
};

const getNumbersAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const numsForQuestion = `${firstNumber} ${secondNumber}`;
  const answer = getGreatestCommonDivisor(firstNumber, secondNumber);
  return [numsForQuestion, answer];
};

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const playGcdGame = () => playGame(getNumbersAndAnswer, gameQuestion);

export default playGcdGame;

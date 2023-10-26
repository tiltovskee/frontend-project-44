import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getNumberAndAnswer = () => {
  const number = getRandomNumber(1, 100);
  const answer = isEven(number);
  return [number, answer];
};

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => playGame(getNumberAndAnswer, gameQuestion);

export default playEvenGame;

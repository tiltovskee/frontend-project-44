import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (number) => (number % 2 === 0 ? true : false);

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => playGame(generateRound, gameQuestion);

export default playEvenGame;

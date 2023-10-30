import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0 || number === 1) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeGame = () => playGame(generateRound, gameQuestion);

export default playPrimeGame;

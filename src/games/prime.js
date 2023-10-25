import { getAnswerAndCheck, playGame } from '../index.js';
import getNumber from '../helpers.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0 || num === 1) {
      return false;
    }
  }
  return true;
};

const playRound = () => {
  const num = getNumber(1, 100);
  const correctAnswer = (isPrime(num) ? 'yes' : 'no');
  return getAnswerAndCheck(num, correctAnswer);
};

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeGame = () => playGame(playRound, gameQuestion);

export default playPrimeGame;

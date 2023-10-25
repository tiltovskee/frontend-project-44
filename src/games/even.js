import { getAnswerAndCheck, playGame } from '../index.js';
import getNumber from '../helpers.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const playRound = () => {
  const guessingNum = getNumber(1, 100);
  const correctAnswer = isEven(guessingNum);
  return getAnswerAndCheck(guessingNum, correctAnswer);
};

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => playGame(playRound, gameQuestion);

export default playEvenGame;

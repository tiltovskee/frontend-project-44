import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const getProgression = (startNumber, step, length) => {
  const progression = [startNumber];
  for (let i = 0; i < length - 1; i += 1) {
    const arrayElement = progression[i] + step;
    progression.push(arrayElement);
  }
  return progression;
};

const generateRound = () => {
  const startNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 15);
  const progression = getProgression(startNumber, step, length);
  const guessingNumberIndex = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[guessingNumberIndex]);
  progression[guessingNumberIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const gameQuestion = 'What number is missing in the progression?';

const playProgressionGame = () => playGame(generateRound, gameQuestion);

export default playProgressionGame;

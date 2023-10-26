import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const getProgression = (startNumber, stepOfProgression, lengthOfProgression) => {
  const progression = [startNumber];
  for (let i = 0; i < lengthOfProgression - 1; i += 1) {
    const arrayElement = progression[i] + stepOfProgression;
    progression.push(arrayElement);
  }
  return progression;
};

const getProgressionAndAnswer = () => {
  const startNumber = getRandomNumber(1, 10);
  const stepNumber = getRandomNumber(1, 10);
  const lengthOfProgression = getRandomNumber(5, 15);
  const progression = getProgression(startNumber, stepNumber, lengthOfProgression);
  const guessingNumberIndex = getRandomNumber(0, progression.length);
  const answer = `${progression[guessingNumberIndex]}`;
  progression[guessingNumberIndex] = '..';
  const progressionForQuestion = progression.join(' ');
  return [progressionForQuestion, answer];
};

const gameQuestion = 'What number is missing in the progression?';

const playProgressionGame = () => playGame(getProgressionAndAnswer, gameQuestion);

export default playProgressionGame;

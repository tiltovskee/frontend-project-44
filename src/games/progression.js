import { getAnswerAndCheck, playGame } from '../index.js';
import getNumber from '../helpers.js';

const getProgression = (startNum, stepOfProgression, lengthOfProgression) => {
  const progression = [startNum];
  for (let i = 0; i < lengthOfProgression - 1; i += 1) {
    const arrayElem = progression[i] + stepOfProgression;
    progression.push(arrayElem);
  }
  return progression;
};

const playRound = () => {
  const startNum = getNumber(1, 10);
  const stepNum = getNumber(1, 10);
  const lengthOfProgression = getNumber(5, 15);
  const guessingNumIndex = getNumber(0, lengthOfProgression);
  const progression = getProgression(startNum, stepNum, lengthOfProgression);
  const correctAnswer = `${progression[guessingNumIndex]}`;
  progression[guessingNumIndex] = '..';
  const progressionForQuestion = progression.join(' ');
  return getAnswerAndCheck(progressionForQuestion, correctAnswer);
};

const gameQuestion = 'What number is missing in the progression?';

const playProgressionGame = () => playGame(playRound, gameQuestion);

export default playProgressionGame;

import readlineSync from 'readline-sync';
import getAnswerAndCheck from '../index.js';

const getNumber = () => Math.ceil(Math.random() * 10);
const getLengthOrIndex = (min, max) => Math.floor(Math.random() * (max - min) + min);

const playRound = () => {
  const startNum = getNumber();
  const stepNum = getNumber();
  const lengthOfProgression = getLengthOrIndex(5, 15);
  const guessingNumIndex = getLengthOrIndex(0, lengthOfProgression);
  const progression = [startNum];
  for (let i = 0; i < lengthOfProgression - 1; i += 1) {
    const arrayElem = progression[i] + stepNum;
    progression.push(arrayElem);
  }
  const correctAnswer = `${progression[guessingNumIndex]}`;
  progression[guessingNumIndex] = '..';
  const progressionForQuestion = progression.join(' ');
  return getAnswerAndCheck(progressionForQuestion, correctAnswer);
};

const playGame = () => { // инициализация игры
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // запись имени игрока
  console.log(`Hello, ${name}!\nWhat number is missing in the progression?`);
  for (let i = 0; i < 3; i += 1) { // инициализация счетчика раундов
    const isCorrect = playRound();
    if (!isCorrect) { // проверка результата раунда
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;

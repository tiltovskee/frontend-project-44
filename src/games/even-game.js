import readlineSync from 'readline-sync';
import getAnswerAndCheck from '../index.js';

const playRound = () => { // инициализация одного раунда
  const guessingNum = Math.round(Math.random() * 100); // случайное число от 0 до 100
  const checkEven = guessingNum % 2;
  let correctAnswer = '';
  if (checkEven === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return getAnswerAndCheck(guessingNum, correctAnswer);
};

const playGame = () => { // инициализация игры
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // запись имени игрока
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) { // инициализация счетчика раундов
    const isCorrect = playRound();
    if (!isCorrect) { // проверка результата раунда
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;

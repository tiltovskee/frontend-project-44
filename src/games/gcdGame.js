import readlineSync from 'readline-sync';
import getAnswerAndCheck from '../index.js';

const getNumber = () => Math.ceil(Math.random() * 10);
const playRound = () => { // инициализация одного раунда
  const num1 = getNumber();
  const num2 = getNumber();
  const numsForQuestion = `${num1} ${num2}`;
  let divisor = Math.min(num1, num2);
  let correctAnswer = '';
  while (correctAnswer === '') {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      correctAnswer = `${divisor}`;
    } else {
      divisor -= 1;
    }
  }
  return getAnswerAndCheck(numsForQuestion, correctAnswer);
};

const playGame = () => { // инициализация игры
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // запись имени игрока
  console.log(`Hello, ${name}!\nFind the greatest common divisor of given numbers.`);
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

import readlineSync from 'readline-sync';
import getAnswerAndCheck from '../index.js';

const getNumber = () => Math.ceil(Math.random() * 100);
const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0 || num === 1) {
      return false;
    }
  }
  return true;
};

const playRound = () => {
  const num = getNumber();
  let correctAnswer = '';
  if (isPrime(num)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return getAnswerAndCheck(num, correctAnswer);
};

const playGame = () => { // инициализация игры
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // запись имени игрока
  console.log(`Hello, ${name}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`);
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

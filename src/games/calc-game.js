import readlineSync from 'readline-sync';
import getAnswerAndCheck from '../index.js';

const getNumber = () => Math.round(Math.random() * 100);
const getOperator = () => {
  const operatorsArr = ['+', '-', '*'];
  return operatorsArr[Math.floor(Math.random() * 3)];
};
const playRound = () => { // инициализация одного раунда
  const num1 = getNumber();
  const num2 = getNumber();
  const operator = getOperator();
  let expressionToSolve = '';
  let correctAnswer = '';
  switch (operator) {
    case '+':
      correctAnswer = `${num1 + num2}`;
      expressionToSolve = `${num1} + ${num2}`;
      break;
    case '-':
      correctAnswer = `${num1 - num2}`;
      expressionToSolve = `${num1} - ${num2}`;
      break;
    case '*':
      correctAnswer = `${num1 * num2}`;
      expressionToSolve = `${num1} * ${num2}`;
      break;
    default:
  }
  return getAnswerAndCheck(expressionToSolve, correctAnswer);
};

const playGame = () => { // инициализация игры
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // запись имени игрока
  console.log(`Hello, ${name}!\nWhat is the result of the expression?`);
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

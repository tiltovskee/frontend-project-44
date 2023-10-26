import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return `${firstNumber + secondNumber}`;
    case '-':
      return `${firstNumber - secondNumber}`;
    case '*':
      return `${firstNumber * secondNumber}`;
    default:
      throw new Error(`Ошибка! "${operator}"не является оператором выражения!`);
  }
};

const getExpressionAndAnswer = () => {
  const firstNum = getRandomNumber(1, 10);
  const secondNum = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const expressionToSolve = `${firstNum} ${operator} ${secondNum}`;
  const answer = calculate(firstNum, secondNum, operator);
  return [expressionToSolve, answer];
};

const gameQuestion = 'What is the result of the expression?';

const playCalcGame = () => playGame(getExpressionAndAnswer, gameQuestion);

export default playCalcGame;

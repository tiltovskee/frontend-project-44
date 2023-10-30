import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return `${number1 + number2}`;
    case '-':
      return `${number1 - number2}`;
    case '*':
      return `${number1 * number2}`;
    default:
      throw new Error(`Ошибка! "${operator}"не является оператором выражения!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, number2, operator);
  return [question, answer];
};

const gameQuestion = 'What is the result of the expression?';

const playCalcGame = () => playGame(generateRound, gameQuestion);

export default playCalcGame;

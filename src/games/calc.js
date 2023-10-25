import { getAnswerAndCheck, playGame } from '../index.js';
import getNumber from '../helpers.js';

const getCorrectAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return `${num1 + num2}`;
    case '-':
      return `${num1 - num2}`;
    case '*':
      return `${num1 * num2}`;
    default:
      throw new Error(`Ошибка! "${operator}"не является оператором выражения!`);
  }
};

const playRound = () => {
  const firstNum = getNumber(1, 10);
  const secondNum = getNumber(1, 10);
  const listOfOperators = ['+', '-', '*'];
  const operator = listOfOperators[Math.floor(Math.random() * 3)];
  const expressionToSolve = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = getCorrectAnswer(firstNum, secondNum, operator);
  return getAnswerAndCheck(expressionToSolve, correctAnswer);
};

const gameQuestion = 'What is the result of the expression?';

const playCalcGame = () => playGame(playRound, gameQuestion);

export default playCalcGame;

import generateRandomNumber from '../resources/rng.js';
import gameRun from '../index.js';
import expressionCalc from '../resources/random-expression-calc.js';

const calcGame = () => {
  const calcRule = 'What is the result of the expression?';

  const calcOperations = ['+', '-', '*'];

  const generateCalc = () => {
    const qOne = generateRandomNumber(10);
    const qTwo = generateRandomNumber(10);
    const qOperation = calcOperations[generateRandomNumber(3)];
    const questionCalc = `${qOne} ${qOperation} ${qTwo}`;
    const answerCalc = expressionCalc(qOne, qTwo, qOperation);
    const QnA = [questionCalc, `${answerCalc}`];
    return QnA;
  };

  gameRun(calcRule, generateCalc);
};

export default calcGame;

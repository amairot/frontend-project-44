import generateRandomNumber from '../resources/rng.js';
import gameRun from '../index.js';
import ifEven from '../resources/even-check.js';

const evenGame = () => {
  const evenRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateEven = () => {
    const questionEven = generateRandomNumber(20);
    const answerEven = ifEven(questionEven);
    const QnA = [questionEven, `${answerEven}`];
    return QnA;
  };

  gameRun(evenRule, generateEven);
};

export default evenGame;

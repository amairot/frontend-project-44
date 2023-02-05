import generateRandomNumber from '../resources/rng.js';
import gameRun from '../index.js';
import findGcd from '../resources/gcd-check.js';

const gcdGame = () => {
  const gcdRule = 'Find the greatest common divisor of given numbers.';

  const generateGcd = () => {
    const qOne = generateRandomNumber(20);
    const qTwo = generateRandomNumber(20);
    const questionGcd = `${qOne} ${qTwo}`;
    const answerGcd = findGcd(qOne, qTwo);
    const QnA = [questionGcd, `${answerGcd}`];
    return QnA;
  };

  gameRun(gcdRule, generateGcd);
};

export default gcdGame;

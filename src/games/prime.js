import generateRandomNumber from '../resources/rng.js';
import gameRun from '../index.js';
import ifPrime from '../resources/prime-check.js';

const primeGame = () => {
  const primeRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generatePrime = () => {
    const questionPrime = generateRandomNumber(20);
    const answerPrime = ifPrime(questionPrime);
    const QnA = [questionPrime, `${answerPrime}`];
    return QnA;
  };

  gameRun(primeRule, generatePrime);
};

export default primeGame;

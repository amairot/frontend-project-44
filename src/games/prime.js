import generateRandomNumber from '../rng.js';
import gameRun from '../index.js';

const primeGame = () => {
  const primeRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generatePrime = () => {
    const questionPrime = generateRandomNumber(20);
    let answerPrime = '';
    let divisionCount = 0;
    for (let i = 1; i <= (questionPrime / 2); i += 1) {
      if ((questionPrime % i) === 0) {
        divisionCount += 1;
      }
    }
    if (divisionCount === 1) {
      answerPrime = 'yes';
    } else {
      answerPrime = 'no';
    }
    const QnA = [questionPrime, `${answerPrime}`];
    return QnA;
  };

  gameRun(primeRule, generatePrime);
};

export default primeGame;

import generateRandomNumber from '../rng.js';
import gameRun from '../index.js'; 

const gcdGame = () => {
  const gcdRule = 'Find the greatest common divisor of given numbers.';

  const generateGcd = () => {
    const qOne = generateRandomNumber(20);
    const qTwo = generateRandomNumber(20);
    const questionGcd = `${qOne} ${qTwo}`;
    const answerGcd = [qOne, qTwo];
    let placeholder = 0;
    // euclidean algorithm; the algorithm replaces (a, b) by (b, a mod b) repeatedly until the pair is (d, 0), where d is the greatest common divisor.
    while (answerGcd[1] != 0) { // for 48, 18
        placeholder = answerGcd[0]; // ph = 48
        answerGcd[0] = answerGcd[1]; // ph = 48, (18, 18)
        answerGcd[1] = placeholder % answerGcd [0]; // ph = 48, (18, 48 mod 18) -> (18, 12) and repeat
    }

    const QnA = [questionGcd, `${answerGcd[0]}`];
    return QnA;
  };

  gameRun(gcdRule, generateGcd);
};

export default gcdGame;
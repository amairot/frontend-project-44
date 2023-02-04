import generateRandomNumber from '../rng.js';
import gameRun from '../index.js'; // needs game rule + gen game function w array[question, answer (string!!!)]

const evenGame = () => {
  const evenRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateEven = () => {
    const questionEven = generateRandomNumber(20);
    let answerEven = '';
    if ((questionEven % 2) === 0) {
      answerEven = 'yes';
    } else {
      answerEven = 'no';
    }
    const QnA = [questionEven, `${answerEven}`];
    return QnA;
  };

  gameRun(evenRule, generateEven);
};

export default evenGame;

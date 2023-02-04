import generateRandomNumber from '../rng.js';
import gameRun from '../index.js';

const progGame = () => {
  const progRule = 'What number is missing in the progression?';

  const generateProg = () => {
    const progStart = generateRandomNumber(15);
    const progChange = generateRandomNumber(4) + 1;
    const progLength = 5 + generateRandomNumber(10);
    const answerPosition = generateRandomNumber(progLength - 1);
    const prog = [progStart];
    for (let i = 1; i < progLength; i += 1) {
      prog.push(prog[i - 1] + progChange);
    }
    const answerProg = prog[answerPosition];
    let questionProg = '';
    for (let i = 0; i < progLength; i += 1) {
      if (i === answerPosition) {
        prog[answerPosition] = '..';
      }
      questionProg = `${questionProg} ${prog[i]}`;
    }

    const QnA = [questionProg, `${answerProg}`];
    return QnA;
  };

  gameRun(progRule, generateProg);
};

export default progGame;

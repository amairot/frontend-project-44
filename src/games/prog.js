import generateRandomNumber from '../resources/rng.js';
import gameRun from '../index.js';
import generateProgression from '../resources/progression-gen.js';
import generateProgressionString from '../resources/prog-gen-string.js';

const progGame = () => {
  const progRule = 'What number is missing in the progression?';

  const generateProg = () => {
    const progStart = generateRandomNumber(15);
    const progChange = generateRandomNumber(4) + 1;
    const progLength = 5 + generateRandomNumber(10);
    const answerPosition = generateRandomNumber(progLength - 1);
    const prog = generateProgression(progStart, progChange, progLength);
    const answerProg = prog[answerPosition];
    const questionProg = generateProgressionString(prog, answerPosition);
    const QnA = [questionProg, `${answerProg}`];
    return QnA;
  };

  gameRun(progRule, generateProg);
};

export default progGame;

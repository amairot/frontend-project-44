import generateRandomNumber from "../rng.js";
import gameRun from "../index.js"; // needs game rule + gen game function w array[question, answer (string!!!)]

const calcGame = () => {
    const calcRule = 'What is the result of the expression?';

    const calcOperations = ['+', '-', '*'];

    const generateCalc = () =>{
        const qOne = generateRandomNumber(10);
        const qTwo = generateRandomNumber(10);
        const qOperation = calcOperations[generateRandomNumber(3)];
        const questionCalc = `${qOne} ${qOperation} ${qTwo}`;
        let answerCalc = 0;
        switch(qOperation) {
            case '+':
                answerCalc = qOne + qTwo;
                break;
            case '-':
                answerCalc = qOne - qTwo;
                break;
            case '*':
                answerCalc = qOne * qTwo;
                break;
            default:
                break;
        }
        const QnA = [questionCalc, `${answerCalc}`];
        return QnA;
    };

    gameRun(calcRule, generateCalc);
};

export default calcGame;
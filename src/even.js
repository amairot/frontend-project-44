import readlineSync from 'readline-sync';

const evenGame = () => {

    const generateRandomNumber = () => {
        const max = 100; //maximum possible number
        return Math.floor(Math.random() * max); 
    };

    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let winCount = 0;
    for (let i = 0; i < 3; i+=1) {
        const questionNumber = generateRandomNumber();
        let correctAnswer = '';
        if ((questionNumber % 2) === 0) {
            correctAnswer = 'yes';
        } else {
            correctAnswer = 'no';
        }
        console.log(`Question: ${questionNumber}`);
        const answerGiven = readlineSync.question('Your answer: ');
        if (correctAnswer === answerGiven) {
            console.log('Correct!');
            winCount += 1;
            continue;
        } else {
            console.log(`'${answerGiven}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            break;
        }
    }

    if (winCount === 3) {
        console.log(`Congratulations, ${userName}!`);
    }
};

export default evenGame;
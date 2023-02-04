import readlineSync from 'readline-sync';


const gameSkeleton = (gameRule, gameQnA) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(`${gameRule}`); // rule const ?
    let winCount = 0;
    for (let i = 0; i < 3; i += 1) {
      console.log(`Question: ${questionGiven}`);
      const answerGiven = readlineSync.question('Your answer: ');
      if (correctAnswer === answerGiven) {
        console.log('Correct!');
        winCount += 1;
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

export default gameSkeleton;
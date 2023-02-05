const generateProgressionString = (progression, answerPosition) => {
    let progressionString = '';
    for (let i = 0; i < progression.length; i += 1) {
      if (i === answerPosition) {
        progression[answerPosition] = '..';
      }
      progressionString = `${progressionString} ${progression[i]}`;
    }
    return progressionString;

};

export default generateProgressionString;
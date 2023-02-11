const generateProgressionString = (progression, answerPosition) => {
  let progressionString = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === answerPosition) {
      progressionString = `${progressionString} ..`;
    } else {
      progressionString = `${progressionString} ${progression[i]}`;
    }
  }
  return progressionString.slice(1);
};

export default generateProgressionString;

const expressionCalc = (one, two, operation) => {
    let answer = 0;
    switch (operation) {
      case '+':
        answer = one + two;
        break;
      case '-':
        answer = one - two;
        break;
      case '*':
        answer = one * two;
        break;
      default:
        break;
    }
    return answer;
};
export default expressionCalc;
const ifPrime = (number) => {
  let divisionCount = 0;
  for (let i = 1; i <= (number / 2); i += 1) {
    if ((number % i) === 0) {
      divisionCount += 1;
    }
  }
  if (divisionCount === 1) {
    return 'yes';
  }
  return 'no';
};
export default ifPrime;

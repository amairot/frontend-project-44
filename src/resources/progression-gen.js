const generateProgression = (start, change, length) => {
  const prog = [start];
  for (let i = 1; i < length; i += 1) {
    prog.push(prog[i - 1] + change);
  }
  return prog;
};
export default generateProgression;

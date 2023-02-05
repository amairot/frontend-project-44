const findGcd = (first, second) => {
  let a = first;
  let b = second;
  let placeholder = 0;
  // euclidean algorithm; the algorithm replaces (a, b) by (b, a mod b) repeatedly
  // until the pair is (d, 0), where d is the greatest common divisor.
  while (b !== 0) { // for 48, 18
    placeholder = a; // ph = 48
    a = b; // ph = 48, (18, 18)
    b = placeholder % a; // ph = 48, (18, 48 mod 18) -> (18, 12) and repeat
  }
  return a;
};

export default findGcd;

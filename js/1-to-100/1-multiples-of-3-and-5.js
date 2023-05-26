// https://projecteuler.net/problem=1

function multiplesOfThreeAndFive(number) {
  let multiplesSum = 0;
  let i = 1;

  for (i; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesSum += i;
    }
  }

  return multiplesSum;
}

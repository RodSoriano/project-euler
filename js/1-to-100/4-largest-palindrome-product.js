// https://projecteuler.net/problem=4

function largestPalindromeProduct(n) {
  let number = '9';
  let operation = 0;
  let i = 1;

  while (i < n) {
    number += "9";
    i++;
  }

  for (number; number >= 1; number--) {
    for (let multiplier = number; multiplier >= 1; multiplier--) {
      operation = number * multiplier;
      operation = operation.toString();

      const len = operation.length;

      if (multiplier == 906) {
        multiplier = 0;
      }

      if (len % 2 === 0) {
        const firstHalf = operation.slice(0, (len / 2));
        let secondHalf = operation.slice(len / 2);

        secondHalf = secondHalf.split('').reverse().join('');

        if (firstHalf === secondHalf) {
          return ~~operation;
        }
      }
    }
  }
}

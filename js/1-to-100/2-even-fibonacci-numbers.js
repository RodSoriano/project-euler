//Might need refactoring.

function fiboEvenSum(n) {
  let sequence = [1, 2];
  let sum = 0;
  let i = 2;

  while (sequence[sequence.length - 1] < n) {
    let operation = sequence[i - 1] + sequence[i - 2];

    if (operation > n) {
      break;
    }

    sequence.push(operation);

    i++;
  }

  sequence.forEach(function(singleNumber) {
    if (singleNumber % 2 === 0) {
      sum += singleNumber;
    }
  });

  return sum;
}

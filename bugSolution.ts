function printNumber(num: number): void {
  console.log(num);
}

function processNumber(num: number | string | undefined): void {
  if (num === undefined) {
    console.error('Invalid input: undefined');
    return;
  }
  if (typeof num === 'string') {
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) {
      console.error('Invalid input: Not a number');
      return;
    }
    printNumber(parsedNum);
  } else {
    printNumber(num);
  }
}

processNumber(10); // Correct
processNumber('20'); // Correct
processNumber('abc'); // Correctly handles NaN
processNumber(undefined); // Correctly handles undefined
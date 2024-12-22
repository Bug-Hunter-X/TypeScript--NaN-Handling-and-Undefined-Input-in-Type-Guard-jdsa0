function printNumber(num: number): void {
  console.log(num);
}

function processNumber(num: number | string): void {
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
processNumber('abc'); // Incorrect, should handle NaN case
processNumber(undefined); // Error: Argument of type 'undefined' is not assignable to parameter of type 'number | string'.
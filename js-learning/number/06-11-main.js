/*
  Version 2
  Version 1 is below
*/

// 1. Get the ones of a number having 3 digits
function extractTheOnes(n) {
  if (n.toString().length !== 3) return -1;

  return n % 10;
}

console.log(extractTheOnes(988));

// 2. Get the tens of a number having 3 digits
function extractTheTens(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc((n % 100) / 10);
}

console.log(extractTheTens(928));

// 3. Get the hundreds of a number having 3 digits
function extractTheHundreds(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc(n / 100);
}

console.log(extractTheHundreds(988));

// 4. Sum all digits of a number having 3 digits
function sumAllDigits(n) {
  if (n.toString().length !== 3) return -1;

  const theOnes = n % 10;
  const theTens = Math.trunc((n % 100) / 10);
  const theHundres = Math.trunc(n / 100);

  return theOnes + theTens + theHundres;
}

console.log(sumAllDigits(988));

/*
  Version 1
*/

// 1. Get the ones of a number having 3 digits
function extractTheOnes(n) {
  if ((n < 99) & (n > 1000)) return -1;

  return n % 10;
}

console.log(extractTheOnes(988));

// 2. Get the tens of a number having 3 digits
function extractTheTens(n) {
  if ((n < 99) & (n > 1000)) return -1;

  return Math.trunc((n % 100) / 10);
}

console.log(extractTheTens(988));

// 3. Get the hundreds of a number having 3 digits
function extractTheHundreds(n) {
  if ((n < 99) & (n > 1000)) return -1;

  return Math.trunc((n % 1000) / 100);
}

console.log(extractTheHundreds(988));

// 4. Sum all digits of a number having 3 digits
function sumAllDigits(n) {
  if ((n < 99) & (n > 1000)) return -1;

  let sum = 0;
  sum = n % 10;
  sum += Math.trunc((n % 100) / 10);
  sum += Math.trunc((n % 1000) / 100);

  return sum;
}

console.log(sumAllDigits(988));

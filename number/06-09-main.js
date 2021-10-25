// 1. Write a function to check if a number is odd/even
function isEven(n) {
  if (n <= 0) return -1;

  return n % 2 === 0;
}

console.log(isEven(2));

function isOdd(n) {
  if (n <= 0) return -1;

  return n % 2 === 1;
}

console.log(isOdd(3));

// 2. Write a function to check if a number is divisible by 5
function isDivisibleBy5(n) {
  if (n <= 0) return -1;

  return n % 5 === 0;
}

console.log(isDivisibleBy5(0));
console.log(isDivisibleBy5(5));
console.log(isDivisibleBy5(6));

// 3. Write a function to check if a number is perfect square
function isPerfectSquare(n) {
  if (n < 0) return -1;

  return Number.isInteger(Math.sqrt(n));
}

function isPerfectSquareV2(n) {
  if (n < 0) return -1;

  const sqrtN = Math.sqrt(n);
  const sqrtNInt = Math.trunc(sqrtN);
  return sqrtNInt * sqrtNInt === n;
}

console.log(isPerfectSquareV2(5));
console.log(isPerfectSquareV2(6));
console.log(isPerfectSquareV2(9));

// 1. Convert hours to seconds
function convertHoursToSeconds(hours) {
  if (hours < 0) return -1;

  return hours * 3600;
}

console.log(convertHoursToSeconds(5));

// 2. Given 3 numbers, find max
function findMax(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

console.log(findMax(9, 8, 4));

// 3. Given 3 numbers, find max even number
function findEvenMax(a, b, c) {
  let evenMax = Number.NEGATIVE_INFINITY;

  if (a % 2 === 0 && a > evenMax) evenMax = a;
  if (b % 2 === 0 && b > evenMax) evenMax = b;
  if (c % 2 === 0 && c > evenMax) evenMax = c;

  return evenMax;
}

console.log(findEvenMax(2, 8, 11));

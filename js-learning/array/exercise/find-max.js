// Write a function to find max
// for ... i
// forEach
// reduce

// for ... i
function findMaxI(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let max = numberList[0];

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > max) {
      max = numberList[i];
    }
  }

  return max;
}

console.log(findMaxI([1, 2, 3, 411, 5, 6, 8, 12, 55]));

// forEach
function findMaxForEach(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let max = numberList[0];

  numberList.forEach((number) => {
    if (number > max) {
      max = number;
    }
  });

  return max;
}

console.log(findMaxForEach([1, 2, 3, 411, 5, 6, 8, 12, 55]));

// reduce
function findMaxReduce(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  // return numberList.reduce((max, number) => {
  //   if (number > max) return number;

  //   return prevMax;
  // });

  // return numberList.reduce((max, number) => {
  //   return number > max ? number : max;
  // });

  return numberList.reduce((max, number) => (number > max ? number : max));
}

console.log(findMaxReduce([1, 2, 3, 411, 5, 6, 8, 12, 55]));

/*
  Explain function find by function findFirstEven
  If It was found , It will return value of element
  Else It will return undefined

  Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/

// v1
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  let evenNumber;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      evenNumber = numberList[i];
      break;
    }
  }

  return evenNumber;
}

console.log(findFirstEven([1, 3, 8, 10]));

// v2
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      return numberList[i];
    }
  }

  return undefined;
}

console.log(findFirstEven([1, 3, 8, 10]));

// v3
function findFirstEven(numberList, callBackFn) {
  if (!Array.isArray(numberList) || typeof callBackFn !== 'function') return undefined;

  for (let i = 0; i < numberList.length; i++) {
    if (callBackFn(numberList[i])) return numberList[i];
  }

  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(findFirstEven([1, 3, 8, 10], isEven));

console.log(
  findFirstEven([1, 3, 8, 10], function (number) {
    return number % 2 === 0;
  })
);

console.log(findFirstEven([1, 3, 8, 10], (number) => number % 2 === 0));

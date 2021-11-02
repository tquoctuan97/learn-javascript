/*
Cài đặt Every
*/

function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }

  return true;
}

console.log(checkIfAllEven([2, 4, 6]));
console.log(checkIfAllEven([1, 4, 6]));

/* 
Cài đặt Some
*/

function checkIfOneEven(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return true;
  }

  return false;
}

console.log(checkIfOneEven([2, 4, 6]));
console.log(checkIfOneEven([1, 3, 6]));

/* 
Cài đặt indexOf
*/

function findIndexFirstEven(numberList) {
  if (!Array.isArray(numberList)) return -1;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return i;
  }

  return -1;
}

console.log(findIndexFirstEven([2, 4, 6]));
console.log(findIndexFirstEven([1, 3, 6]));
console.log(findIndexFirstEven([1, 3, 7]));

/* 
Cài đặt indexLastOf
*/
function findIndexLastEven(numberList) {
  if (!Array.isArray(numberList)) return -1;

  let finalIndex = -1;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) finalIndex = i;
  }

  return finalIndex;
}

console.log(findIndexLastEven([2, 4, 6, 3, 8]));
console.log(findIndexLastEven([1, 3, 6]));
console.log(findIndexLastEven([1, 3, 7]));

/*
Cài đặt Includes
*/

function isIncludeEven(numberList) {
  if (!Array.isArray(numberList)) return -1;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return true;
  }

  return false;
}

console.log(isIncludeEven([]));
console.log(isIncludeEven(''));
console.log(isIncludeEven([2, 4, 6, 3, 8]));
console.log(isIncludeEven([1, 3, 6]));
console.log(isIncludeEven([1, 3, 7]));

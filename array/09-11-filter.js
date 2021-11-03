// filter(arr, callbackFn)
// callbackFn return true / false
// Output new Array with all elements that pass the test implemented

function filter(arr, filterFunction) {
  if (!Array.isArray(arr) || typeof filterFunction !== 'function') return undefined;

  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (filterFunction(element, i)) {
      newArray.push(element);
    }
  }

  return newArray;
}

console.log(filter([1, 2, 8, 4], (x) => x % 2 === 0));

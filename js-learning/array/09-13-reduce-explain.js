const result = [2, 4, 6].reduce((sum, number) => sum + number, 0);
console.log(result);

// reduce(arr, callbackFn, initialValue)
// rules:
// - arr should be an array and callbackFn should be a function
// - arr.length = 0 and initialValue === undefined --> throw error
// - arr.length = 0 and initialValue !== undefined --> return initialValue

function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error('Should have initialValue when arr is empty');
    }

    return initialValue;
  }

  const hasInitialValue = initialValue !== undefined;
  const index = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];

  for (let i = index; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i]);
  }

  return accumulator;
}

console.log(reduce([2, 4, 6], (sum, number) => sum + number));

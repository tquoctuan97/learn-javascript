// map
function map(arr, mappingFn) {
  if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let newElement = mappingFn(element, i);
    newArray.push(newElement);
  }

  return newArray;
}

console.log(map([1, 2, 3], (x) => x * 2));
console.log(map([1, 2, 3], (x) => x * 1));
console.log(map([1, 2, 3, 4, 5], (x, idx) => (idx % 2 === 0 ? x + 1 : x * 2)));

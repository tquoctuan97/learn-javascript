// Object exericse
// 1. Create an object student with name is Easy Frontend and age is 18
const student = {
  name: 'Easy Frontend',
  age: 18,
};

// 2. Check if an object is empty (means have no key)
function isObjectEmpty(object) {
  return Object.keys(object).length === 0;
}

const emptyStudent = {};

console.log(isObjectEmpty(student));

// 3. Get avergare mark of an object
// Ex: calcAvgMark({math: 10, english: 9}) -> 9

function calcAvgMark(mark) {
  if (!mark) return -1;

  const length = Object.keys(mark).length;

  let sum = 0;
  for (let key in mark) {
    const value = mark[key];
    sum += mark[key];
  }

  return (sum / length).toFixed(1);
}

console.log(calcAvgMark({ math: 10, english: 8 }));

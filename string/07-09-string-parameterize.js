// String Exercise
// Wirte a function to paramaterize a string
// Eg: parameterize('Code JS Is Fun') -> 'code-js-is-fun'

// Step 1: Check arg string is not empty
// Step 2: transfrom toLowerCase()
// Step 3: replaceAll white space to dash
// Step 4: return

// p1: replaceAll
// p2: split and join

function parameterize(str) {
  if (!str.trim()) return -1;

  // return str.toLowerCase().replaceAll(' ', '-');
  return str.toLowerCase().split(' ').join('-');
}

// console.log(parameterize(' '));
console.log(parameterize('Code JS Is Fun'));

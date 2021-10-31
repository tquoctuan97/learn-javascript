// String
// Check if a string contain a email address with "@gmail.com" or not
//
// Step
// Check input string not empty
// if string have @gmail.com return true
// else return false

function hasEmail(str) {
  if (!str.trim()) return -1;

  // return str.indexOf('@gmail.com') >= 0;
  // return str.lastIndexOf('@gmail.com') >= 0;
  return str.includes('@gmail.com');
}

console.log(hasEmail(' '));
console.log(hasEmail('abc'));
console.log(hasEmail('ahhihi @gmail.com xyz'));
console.log(hasEmail('xyz @gmai def'));

// Write a fucntion to transform a string:
// - The first letter is UPPERCASE
// - The rest is lowercase
// Eg: capitalize('easy FRontend') => "Easy frontend"

function capitalize(str) {
  if (!str.trim()) return '';

  const firstLetter = str[0].toUpperCase();
  const restLetter = str.slice(1).toLowerCase();

  return `${firstLetter}${restLetter}`;
}

console.log(capitalize(' '));
console.log(capitalize('easy FRontend'));
console.log(capitalize('ABC'));

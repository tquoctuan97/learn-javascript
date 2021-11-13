// Write a function to calculate the area of a rectangle
function calcAreaOfRectangle(a, b) {
  // Check arg
  if (a <= 0 || b <= 0) return -1;

  // Progress & Return
  return a * b;
}

console.log(calcAreaOfRectangle(5, 2));

// Write a function to calculate perimeter of a rectangle
function caclPerimeterOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;

  return (a + b) * 2;
}

console.log(caclPerimeterOfRectangle(5, 2));

// Write a function to calculate area of circle
function calcAreaOfCircle(r) {
  if (r <= 0) return -1;

  return Math.PI * r * r;
}

console.log(calcAreaOfCircle(5));

// Array exercise
// 1. Print numbers: 1 -> 10
// 2. Print even numbers [2, 4, 6, 8, 10]
// 3. Print even numbers but less than n

// 1. Print numbers: 1 -> 10
function printNumbers() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

printNumbers();

// 2. Print even numbers [2, 4, 6, 8, 10]
function printNumbersEven() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}

printNumbersEven();

// 3. Print even numbers but less than n
function printNumbersN(n) {
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}

printNumbersN(20);

/*
Viết hàm compareNumbers(a, b)

Input: 
nhận vào 2 số nguyên a, b bất kỳ.

Output:

1 nếu a > b
0 nếu a = b
-1 nếu a < b


Ví dụ:

compareNumbers(3, 5) --> -1
compareNumbers(9, 7) --> 1
compareNumbers(7, 7) --> 0

*/

function compareNumbers(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}

console.log(compareNumbers(3, 5));
console.log(compareNumbers(9, 7));
console.log(compareNumbers(7, 7));

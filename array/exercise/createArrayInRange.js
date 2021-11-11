/*
Liệt kê các số trong khoảng [a, b]
Viết hàm createArrayInRange(a, b) để tạo ra mảng gồm các số nằm trong khoảng [a, b] (có bao gồm a và b)

Input: Với a, b là các số thoả điều kiện sau: -100 < a < b < 100

Output: Trả về là một array chứa các số trong khoảng từ a tới b.

Ví dụ:
createArrayInRange(1, 5) --> [1, 2, 3, 4, 5]
createArrayInRange(-2, 1) --> [-2, -1, 0, 1]



Hãy viết bài này bằng 2 cách:
Dùng for...i createArrayInRangeV1(a, b)
Dùng Array.from() createArrayInRangeV2(a, b)
*/

// using for...i
function createArrayInRangeV1(a, b) {
  // -100 < a < b < 100
  if (a < -100 || a > 99) return null;
  if (b < -99 || b > 100 || a > b) return null;
  // your code here
  let result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
}

console.log(createArrayInRangeV1(-100, -100));

// using Array.from()
function createArrayInRangeV2(a, b) {
  // your code here
  if (a < -100 || a > 99) return null;
  if (b < -99 || b > 100 || a > b) return null;

  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

console.log(createArrayInRangeV2(2, 5));

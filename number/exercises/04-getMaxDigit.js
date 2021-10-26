/*

Viết hàm function getMaxDigit(n) {} 
để tìm ra chữ số lớn nhất của một số nguyên dương n (0 <= n < 1000)

Ví dụ:
getMaxDigit(1) --> 1
getMaxDigit(12) --> 2
getMaxDigit(123) --> 3
getMaxDigit(921) --> 9

Trường hợp dữ liệu không hợp lệ, nằm ngoài vùng cho phép của n thì trả về -1

Lưu ý: không sử dụng vòng lặp vì chưa học kiến thức này.

*/

function getMaxDigit(n) {
  if (n < 0 || n >= 1000) return -1;

  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);

  let max = ones;

  if (tens > max) max = tens;
  if (hundreds > max) max = hundreds;

  return max;
}

console.log(getMaxDigit(1));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(921));

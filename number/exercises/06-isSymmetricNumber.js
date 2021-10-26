/*
Viết hàm isSymmetricNumber(n)

Input:
Số nguyên dương n có tối đa 3 chữ số 

Output:
true nếu n là số đối xứng, ngược lại trả về false.

Giả sử tham số n truyền vào luôn luôn là số có tối đa 3 chữ số. (0 --> 999)

Số đối xứng là số mà đọc từ trái sang phải nó giống như đọc từ phải sang trái.

Ví dụ: 1, 22, 33, 121, 222, 353, 373, ...

Lưu ý: không dùng chuỗi, không dùng mảng, chỉ xử lý bằng số thôi nhé.
*/

function isSymmetricNumber(n) {
  if (n < 0 && n > 1000) return -1;

  let result = false;

  if (n < 10) {
    result = true;
  }

  if (n > 10 && n <= 99 && Number.isInteger(n / 11)) {
    result = true;
  }

  if (n >= 100) {
    let ones = n % 10;
    let hundreds = Math.trunc(n / 100);
    result = Boolean(ones === hundreds);
  }

  return result;
}

console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(22));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(121));
console.log(isSymmetricNumber(222));
console.log(isSymmetricNumber(352));
console.log(isSymmetricNumber(373));

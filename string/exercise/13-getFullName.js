/*
Trả về full name khi biết first và last name

Viết hàm getFullName(firstName, lastName) nhận vào firstName và lastName và trả về chuỗi fullName.

Quy tắc để tạo chuỗi fullName như sau:

firstName và lastName là optional (có thể không có)

fullName không có khoảng trắng thừa ở đầu và cuối chuỗi

firstName và lastName cần phải viết hoa chữ cái đầu tiên, chữ cái còn lại là viết thường

Ví dụ:

getFullName('Alice') --> 'Alice'

getFullName('Alice', '') --> 'Alice'

getFullName('', 'Nguyen') --> 'Nguyen'

getFullName('Bob', 'Tran') --> 'Bob Tran'

getFullName('john', 'pHAm') --> 'John Pham'

Happy coding!

*/

function getFullName(firstName, lastName) {
  if (!firstName.trim() && !lastName.trim()) return '';

  let formatFirstName = '';
  let formatLastName = '';

  if (firstName) {
    const valueFrirstName = firstName.trim();
    formatFirstName = valueFrirstName[0].toUpperCase() + valueFrirstName.slice(1).toLowerCase();
  }
  if (lastName) {
    const valueLastName = lastName.trim();
    formatLastName = valueLastName[0].toUpperCase() + valueLastName.slice(1).toLowerCase();
  }

  return `${formatFirstName} ${formatLastName}`.trim();
}

console.log(getFullName('Alice'));
console.log(getFullName('Alice', ''));
console.log(getFullName('', 'Nguyen'));
console.log(getFullName('Bob', ''));
console.log(getFullName('Alice', 'Tran'));
console.log(getFullName('john', 'pHAm'));

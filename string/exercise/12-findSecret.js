/*
Truy tìm mật mã

Viết hàm findSecret(code) để tìm ra chuỗi mật mã với quy tắc như sau.

Bỏ đi các ký tự HOA trong code, chuỗi còn lại chính là mật mã cần tìm.

Lưu ý: không dùng hàm replaceAll() và không dùng regular expression (regexp)

Ví dụ: 

findSecret('SUPERCODE') --> ''
findSecret('SUPERhelloCODE') --> 'hello'
findSecret('eaABFHsyUEYSJfrontJSKJSHend') --> 'easyfrontend'

Happy coding!


Lưu ý: được phép dùng vòng for để duyệt chuỗi trong bài này.

*/

function findSecret(code) {
  if (!code.trim()) return '';

  let serect = '';

  for (let i = 0; i < code.length; i++) {
    if (code[i].toLowerCase() === code[i]) {
      serect += code.slice(i, i + 1);
    }
  }

  return serect;
}

console.log(findSecret('SUPERCODE'));
console.log(findSecret('SUPERhelloCODE'));
console.log(findSecret('eaABFHsyUEYSJfrontJSKJSHend'));

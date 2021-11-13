/* Viết hàm function removeVowel(str) để tìm 
và remove tất cả nguyên âm có trong câu văn đầu vào.

Nguyên âm là các ký tự: u, e, o, a, i (uể oải :P)


Ví dụ:

removeVowel('') --> ''
removeVowel('say hello') --> 'sy hll' vì a, e, o là nguyên âm nên đã bị xoá

Giả định là mỗi nguyên âm trong str chỉ xuất hiện một lần.

Trường hợp chuỗi sau khi bỏ các nguyên âm có dư khoảng trắng ở đầu hoặc cuối chuỗi, 
thì hãy bỏ luôn các khoảng trắng thừa này nhé.

*/

function removeVowel(str) {
  if (!str.trim()) return '';

  const newStr = str
    .replace('u', '')
    .replace('e', '')
    .replace('o', '')
    .replace('a', '')
    .replace('i', '');

  return newStr.trim();
}

console.log(removeVowel(' '));
console.log(removeVowel('ueoai js'));
console.log(removeVowel('say hello'));

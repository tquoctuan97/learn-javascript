/* 
Rút trích domain từ địa chỉ email

Viết hàm extractDomain(email) nhận vào địa chỉ email, 
trả về phần domain sau ký tự @

Ví dụ:

extractDomain('')  --> ''
extractDomain('alice@gmail.com')  --> 'gmail.com'
extractDomain('bob@abc.com') --> 'abc.com'

Viết hàm theo 2 hướng tiếp cận:

extractDomainV1(email) Sử dụng split
extractDomainV2(email) Sử dụng indexOf() và slice()
*/

// using split
function extractDomainV1(email) {
  if (!email.trim()) return '';

  return email.split('@')[1];
}

console.log(extractDomainV1(''));
console.log(extractDomainV1('alice@gmail.com'));
console.log(extractDomainV1('bob@abc.com'));

// using indexOf() and slice()
function extractDomainV2(email) {
  if (!email.trim()) return '';

  return email.slice(email.indexOf('@') + 1);
}

console.log(extractDomainV2(''));
console.log(extractDomainV2('alice@gmail.com'));
console.log(extractDomainV2('bob@abc.com'));

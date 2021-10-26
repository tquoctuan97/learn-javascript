/*
Viết hàm getTaxiCount(passengersCount) nhận vào là số hành khách và 
trả về là số taxi cần gọi để chở hết số khách đó.

Input: 
- Amount of Passgengers

Output:
- Amount of taxis

Yêu cầu:

- Khi số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ
- Nếu số khách nhỏ hơn hoặc bằng 4 thì dùng xe 4 chỗ
- Trả về con số duy nhất là tổng của cả 2 loại xe taxi cần phải gọi.

Ví dụ:

getTaxiCount(3) --> 1 - xe 4 chỗ
getTaxiCount(6) --> 1  - xe 7 chỗ
getTaxiCount(10) --> 2 - xe vì 1 xe 7 chỗ và 1 xe 4 chỗ
getTaxiCount(20) --> 3 - xe 7 chỗ

*/

function getTaxiCount(passengersCount) {
  if (typeof passengersCount !== 'number') return 'Input must be a number';
  if (passengersCount < 0) return -1;
  if (passengersCount === 0) return 0;

  if (passengersCount <= 4) return 1;
  if (passengersCount > 4 && passengersCount <= 7) return 1;

  if (passengersCount > 7) {
    let total = passengersCount / 7;

    if (!Number.isInteger(total)) {
      total = Math.trunc(total);

      let rest = passengersCount % 7;
      if (rest <= 4) total++;
      if (rest > 4 && rest <= 6) total++;
    }

    return total;
  }
}

console.log(getTaxiCount(3));
console.log(getTaxiCount(6));
console.log(getTaxiCount(10));
console.log(getTaxiCount(20));
console.log(getTaxiCount(28));

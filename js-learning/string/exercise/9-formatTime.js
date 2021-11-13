/* Viết hàm formatTime(seconds) nhận vào là số giây seconds với (0 <= seconds <= 86400)

Trả về là một chuỗi với định dạng hh:mm:ss trong đó:

hh là số giờ
mm là số phút
ss là số giây

hh, mm, ss luôn luôn hiển thị 2 chữ số kể cả nhỏ hơn 10.


Ví dụ:

formatTime(0) --> '00:00:00'
formatTime(9) --> '00:00:09'
formatTime(4256) --> '01:10:56'

Happy coding!

Step 1: calc hours (seconds / 3600 => get number integer) and return format hh
Step 2: calc minutes ( seconds % 3600 ) / 60 => get number interger
Step 3: calc second seconds % 3600 % 60 

*/

const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  if (seconds < 0 || seconds > 86400) return '';

  const calcHour = Math.trunc(seconds / 3600);
  const calcMinute = Math.trunc((seconds % 3600) / 60);
  const calcSecond = (seconds % 3600) % 60;

  return `${('0' + calcHour).slice(-2)}:${('0' + calcMinute).slice(-2)}:${('0' + calcSecond).slice(
    -2
  )}`;
}

console.log(formatTime(0));
console.log(formatTime(9));
console.log(formatTime(4256));

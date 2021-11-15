/* Liệt kê ước số của số nguyên dương n

Viết hàm getDivisorList(n) nhận vào số nguyên dương (1 <= n <= 1000) 
và trả về một mảng các ước số của n.

Ví dụ:

getDivisorList(1) --> [1]
getDivisorList(10) --> [1, 2, 5, 10]
getDivisorList(12) --> [1, 2, 3, 4, 6, 12]


Hãy viết hàm này bằng 3 cách tiếp cận:

1. Sử dụng for...i từ 1 tới n getDivisorListV1(n)
2. Sử dụng Array.from() và filter() để lặp từ 1 tới n getDivisorListV2(n)
3. Sử dụng Array.from(), forEach() và sort(). Đồng thời chỉ lặp đến căn bậc 2 của n getDivisorListV3(n)

Happy coding!
*/

// using for...i to loop from 1 to n
export function getDivisorListV1(n) {
  if (!Number.isInteger(n) || n < 1 || n > 1000) return undefined;

  const divisorList = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divisorList.push(i);
  }

  return divisorList;
}

// using Array.from() and filter() to loop from 1 to n
export function getDivisorListV2(n) {
  if (!Number.isInteger(n) || n < 1 || n > 1000) return undefined;

  return Array.from({ length: n }, (_, i) => i + 1).filter((number) => n % number === 0);
}

// using Array.from(), forEach and sort() but loop from 1 to square root of n only
export function getDivisorListV3(n) {
  if (!Number.isInteger(n) || n < 1 || n > 1000) return undefined;

  const divisorList = [];

  Array.from({ length: Math.sqrt(n) }, (_, i) => i + 1).forEach((number) => {
    if (n % number === 0 && n > 1) {
      divisorList.push(number, n / number);
    }

    if (n < 2) {
      divisorList.push(number);
    }
  });

  return divisorList.sort((a, b) => a - b);
}

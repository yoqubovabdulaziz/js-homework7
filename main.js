// // array 1

// let n = 5;

// const getLevel2 = (n) => {
//   let arr = []

//   for (let i = 0; i < n; i++) {
//     arr[i] = 2**(i+1);
//   };
//   return arr;
// };

// console.log(getLevel2(n));

// array 2

// let n = 5;
// let A = 2;
// let B = 3;
// let arr = [A, B];

//   for (let i = 2; i < n; i++) {
//     arr[i] = (A + B)*(2**(i-2));
//   };

// console.log(arr);

// array 3

// let n = 5;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 10) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// console.log(arr);
// let res = arr.reverse(); // manda toReversed ishlamadi!
// console.log(arr);

// array 4

// let n = 5;
// let arr = [];
// let arrOfToq = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 10) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     arrOfToq.push(arr[i]);
//   }
// }

// console.log(arr, arrOfToq);

// array 5

// let n = 6;
// let arr = [];
// let arrOfToq = [];
// let arrOfJuft = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     arrOfJuft.push(arr[i]);
//   } else {
//     arrOfToq.unshift(arr[i])
//   }
// }

// console.log(arr);
// arr = [...arrOfJuft, ...arrOfToq];
// console.log(arrOfJuft, arrOfToq);
// console.log(arr);

// array 6

// let n = 6;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// console.log(arr);
// for (let i = 0; i < arr.length; i+=2) {
//   console.log(arr[i]);
// }

// array 7*

// let n = 6;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// console.log(arr);
// for (let i = 0; i < arr.length; i+=2) {
//   console.log(arr[i]);
// }

// array 8

// let n = 6;
// let arr = [];
// let arrOfToq = [];
// let arrOfJuft = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length; i+=2) {
//   arrOfJuft.push(arr[i]);
// }
// for (let i = 1; i < arr.length; i+=2) {
//     arrOfToq.push(arr[i]);
// }

// console.log(arr);
// arr = [...arrOfJuft, ...arrOfToq];
// console.log(arrOfJuft, arrOfToq);
// console.log(arr);

// array 9

// let n = 6;
// let arr = [];
// let arrOfToq = [];
// let arrOfJuft = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length; i+=2) {
//   arrOfJuft.unshift(arr[i]);
// }
// for (let i = 1; i < arr.length; i+=2) {
//   arrOfToq.push(arr[i]);
// }

// console.log(arr);
// arr = [...arrOfToq, ...arrOfJuft];
// console.log(arrOfToq, arrOfJuft);
// console.log(arr);

// array 10*

// let n = 6;
// let arr = [];
// let arrOfToq = [];
// let arrOfJuft = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length; i+=2) {
//   arrOfJuft.unshift(arr[i]);
// }
// for (let i = 1; i < arr.length; i+=2) {
//   arrOfToq.push(arr[i]);
// }

// console.log(arr);
// arr = [...arrOfToq, ...arrOfJuft];
// console.log(arrOfToq, arrOfJuft);
// console.log(arr);

// array 11

// let n = 10;
// let K = 3;
// let L = 6;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// const rangeOutSum = (arr) => {
//   let res = 0;
//   let sumAll = 0;
//   let sumIn = 0;
//   for (let i = 0; i < arr.length; i ++) {
//     sumAll += arr[i];
//     if (K <= i && i <= L) {
//       sumIn += arr[i];
//     };
//   };
//   res = sumAll - sumIn;
//   return res;
// };

// console.log(arr);
// console.log(rangeOutSum(arr));

// array 12

// let arr = [10, false, "", "Abdulaziz", null];
// let truthy = [];
// let falsy = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]) {
//     truthy.push(arr[i]);
//   } else {
//     falsy.push(arr[i]);
//   }
// }

// console.log(arr);
// console.log(truthy, falsy);

// array 13

// let n = 10;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1)*(Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// const getOddMin = (arr) => {
//   let odds = [];
//   let res;
//   // 0 ni ham juft deb hisobladim
//   for (let i = 0; i < arr.length; i += 2) {
//     odds.push(arr[i]);
//   };
//   res = Math.min(...odds)
//   return res;
// };

// console.log(arr);
// console.log(getOddMin(arr));

// array 14

// let n = 10;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1)*(Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// const getEvenMax = (arr) => {
//   let evens = [];
//   let res;
//   for (let i = 1; i < arr.length; i += 2) {
//     evens.push(arr[i]);
//   };
//   res = Math.max(...evens)
//   return res;
// };

// console.log(arr);
// console.log(getEvenMax(arr));

// array 15

// let n = 10;
// let arr = [];
// let res = "Massivda unday son yo'q";

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = arr.length-1; i >= 0; i --) {
//   if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
//     res = arr[i];
//   };
// };

// console.log(arr);
// console.log(res);

// array 16

// let n = 10;
// let R = 8;
// let arr = [];
// let res;
// let oldTemp = Infinity;

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i <= arr.length; i++) {
//   let newTemp = Math.abs(R - arr[i])
//   if (oldTemp > newTemp) {
//     oldTemp = newTemp;
//     console.log(newTemp);
//     res = arr[i];
//   }
// }

// console.log(arr);
// console.log(res);

// array 17

// let n = 10;
// let arr = [];
// let res;
// let oldTemp = -Infinity;

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   let newTemp = arr[i] + arr[i + 1];
//   if (newTemp > oldTemp) {
//     oldTemp = newTemp;
//     res = [arr[i], arr[i + 1]];
//   }
// }

// console.log(arr);
// console.log(res);

// array 18

// let n = 20;
// let arr = [];
// let res;

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1) * (Math.random() > 0.6 ? -1 : 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] === arr[i + 1]) {
//     res = [i, i + 1];
//   } else {
//     res = "Uzur unday son yo'q qayta urinib ko'ring"
//   }
// }

// console.log(arr);
// console.log(res);

// array 19 // eng birinchi va eng kop qaytarilgan birhil sonlani topdim

// let n = 10;
// let arr = [];
// let oldTemp;
// let oldCount = 0;
// let res;

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   let newTemp = arr[i];
//   let newCount = 1;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       newCount++;
//     }
//     if (oldCount < newCount) {
//       oldCount = newCount;
//       oldTemp = newTemp;
//     }
//   }
//   res = [oldTemp, oldCount];
// };

// console.log(arr);
// console.log(res[0] + " dan " + res[1] + " ta");

// array 20

// let n = 10;
// let arrA = [];
// let arrB = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arrA[i] = temp;
// }

// for (let i = 0; i < arrA.length; i++) {
//   if (arrA[i] % 2 == 0) {
//     arrB.push(arrA[i])
//   }
// };

// console.log("a massiv: " + arrA);
// console.log("b massiv elementlari soni: " + arrB.length);
// for (let i = 0; i < arrB.length; i++) {
//   console.log(arrB[i] + " b massiv elementi");
// }

// array 21

// let n = 10;
// let k = 2;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] + k;
// }

// console.log(arr);

// array 22

// let n = 10;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// arr.push(...arr.splice(0, n/2))

// console.log(arr);

// array 23

// let n = 10;
// let arr = [];
// let temp = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   temp.unshift(arr[i]);
// }
// arr = temp;

// console.log(arr);

// array 24

// let n = 10;
// let arr = [];
// let min;
// let max;
// let left;
// let right;
// let temp;

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// min = Math.min(...arr);
// max = Math.max(...arr);
// left = arr.indexOf(min);
// right = arr.indexOf(max);
// temp = right;
// if (left > right) {
//   right = left;
//   left = temp;
// }
// temp = right - left - 1;
// arr.splice(left + 1, temp);

// console.log(arr);

// array 25

// let n = 10;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// arr.unshift(...arr.splice(1))

// console.log(arr);

// array 26

// let n = 10;
// let k = 6;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// const deleteElementWithIndex = (arr, k) => {
//   arr.splice(k, 1);
//   return arr;
// }

// console.log(deleteElementWithIndex(arr, k));

// array 27

// let n = 10;
// let k = 3;
// let m = 6;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// const delElFromKToM = (arr, k, m) => {
//   arr.splice(k, m - k + 1);
//   return arr;
// };

// console.log(delElFromKToM(arr, k, m), arr.length);

// array 28 // ketma ket kelgan bir hil sonlarni faqat bittasini qoldiradi

// let n = 10;
// let arr = [];
// let temp = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == arr[i + 1]) {
//     temp.push(i);
//   }
// }

// for (let i = 0; i < temp.length; i++) {
//   arr.splice(temp[i], 1)
// }

// console.log(arr);

// array 29

// let n = 10;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// const getElementsOneTime = (arr) => {
//   let count = 0;
//   let res = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         count++;
//       }
//     }
//     if (count <= 1) {
//       res.push(arr[i])
//     }
//     count = 0;
//   }

//   return res;
// };

// console.log(getElementsOneTime(arr));

// array 30

// let n = 10;
// let k = 3;
// let arr = [];

// for (let i = 0; i < n; i++) {
//   let temp = Math.round(Math.random() * 9 + 1);
//   arr[i] = temp;
// }

// console.log(arr);

// const searchAllElements = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 3) {
//       res.push(i)
//     }
//   }
//   return res;
// };

// console.log(searchAllElements(arr));
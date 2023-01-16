//Qno27:
// arr = [-5, -3, -2, 1, 5, 7];

// function sumZero(arr) {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         if (arr[i] + arr[j] == 0) {
//             return `The pair which sums to zero is ${arr[i] + ',' + arr[j]}`;
//         }
//         if (arr[i] + arr[j] > 0) { j = j - 1 };
//         if (arr[i] + arr[j] < 0) { i = i + 1 };
//     }
//     return false;
// }

// console.log(sumZero(arr));

//Qno28:
//Find the pair which sums up closest to x ?

// let arr = [1, 2, 3, 5, 8, 9, 16];

// function sum(arr) {
//     let i = 0;
//     let j = arr.length - 1;
//     let proximity = Infinity;
//     let pair;
//     while (i < j) {
//         if (Math.abs(arr[i] + arr[j] - 15) < proximity) {
//             pair = arr[i] + ',' + arr[j];
//             proximity = Math.abs(arr[i] + arr[j] - 15);
//         }
//         if (arr[i] + arr[j] > 15) {
//             j = j - 1;
//         } else if (arr[i] + arr[j] < 15) {
//             i = i + 1;
//         }
//     }
//     return `Pair which sums up closest to 15 is ${pair}`;
// }

// console.log(sum(arr));



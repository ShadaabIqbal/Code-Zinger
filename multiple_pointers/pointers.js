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
// let arr = [10, 22, 28, 29, 30, 40];
// let x = 54;

// function sum(arr,x) {
//     let i = 0;
//     let j = arr.length - 1;
//     let proximity = Infinity;
//     let pair;
//     while (i < j) {
//         if (Math.abs(arr[i] + arr[j] - x) < proximity) {
//             pair = arr[i] + ',' + arr[j];
//             proximity = Math.abs(arr[i] + arr[j] - x);
//         }
//         if (arr[i] + arr[j] > x) {
//             j = j - 1;
//         } else if (arr[i] + arr[j] < x) {
//             i = i + 1;
//         }
//     }
//     return `Pair which sums up closest to ${x} is ${pair}`;
// }

// console.log(sum(arr,x));


//Qno29:
// let arr = [23, -10, 0];

// function largestSum(arr) {
//     let first, second;
//     if (arr[0] > arr[1]) {
//         first = arr[0]
//         second = arr[1]
//     } else {
//         first = arr[1]
//         second = arr[0]
//     }
//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first
//             first = arr[i]
//         } else if (arr[i] > second) {
//             second = arr[i];
//         }
//     }
//     return first + second;
// }

// console.log(largestSum(arr));

//Qno30:
// let numbers = [2, 7, 11, 15];
// let target = 9;
// var twoSum = function (numbers, target) {
//     let i = 0;
//     let j = numbers.length - 1;
//     let arr = [];
//     while (i < j) {
//         if (numbers[i] + numbers[j] == target) {
//             arr.push(i+1,j+1)
//         }
//         if (numbers[i] + numbers[j] > target) {
//             j--
//         } else {
//             i++
//         }
//     }
//     return arr;
// };

// console.log(twoSum(numbers, target));

//Qno31:
// let nums = [1, 2, 1, 0, 0, 2, 1, 1, 0];
// function twoSum(nums) {
//     let low = 0;
//     let mid = 0;
//     let high = nums.length - 1;

//     while (mid <= high) {
//         if (nums[mid] == 0) {
//             let temp = nums[low];
//             nums[low] = nums[mid];
//             nums[mid] = temp;
//             low++
//             mid++
//         } else if (nums[mid] == 2) {
//             let temp = nums[high];
//             nums[high] = nums[mid];
//             nums[mid] = temp;
//             high--
//         } else {
//             mid++
//         }
//     }
//     return nums;
// }

// console.log(twoSum(nums));

// let b = [5, 1, 2, 3, 4, 1, 2, 7];
// let a = b.length;

//Another solution for 30:
// function solution(a, b) {
//     let target = Math.min(...b)
//     let diff = Infinity
//     // console.log(target)

//     let si = b.indexOf(target)
//     // console.log(si)
//     for (i = si + 1; i < a; i++) {
//         if (b[i] == target) {
//             if (diff < Math.abs(si - i)) {
//                 continue
//             } else {

//                 diff = Math.abs(si - i)
//                 si = i
//             }
//         }
//     } if (diff == Infinity) return -1
//     return diff

// }

// console.log(solution(a,b))









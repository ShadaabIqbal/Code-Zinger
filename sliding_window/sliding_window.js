//Qno32:
// let b = [5, 1, 2, 3, 4, 1, 2, 7];
// let a = b.length;

// let nums = [1, 2, 3, 6, 5, 1, 2, 1];
// let k = 3;

// function containsDuplicate(nums, k) {
//     let diff = Infinity;
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (!map.has(nums[i])) {
//             map.set(nums[i], i)
//         } else {
//             diff = Math.abs(i - map.get(nums[i]));
//             if (diff <= k) {
//                 return true;
//             } else {
//                 map.set(nums[i], i);
//             }
//         }
//     }
//     return false;
// }

// console.log(containsDuplicate(nums, k));

//Qno33:
// let Arr = [100, 200, 300, 400, 300, 200, 100, 400, 200];
// let N = 9;
// let K = 3;

// function maxSubArr(arr,n,k) {
//     let currSum = 0;
//     let maxSum = 0;
//     for (let i = 0; i < k; i++) {
//         currSum += arr[i];
//     }
//     maxSum = currSum;
//     for (let i = k; i < n; i++) {
//         currSum+=arr[i];
//         currSum-=arr[i-k];
//         maxSum = Math.max(maxSum,currSum);
//     }
//     return maxSum;
// }

// console.log(maxSubArr(Arr,N,K));

//Qno34:
// function longestString(str) {
//     let obj = {};
//     let start = 0;
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]]) {
//             obj = {};
//             start++
//             i = start;
//         }
//         obj[str[i]] = true;
//         result = Math.max(result, i - start + 1);
//     }
//     return result;
// }

// console.log(longestString('abcdag'));

//Qno35:
// let str = 'geeksforgeeks';

// function sol(str) {
//     let start = 0, maxCount = 0, map = {};
//     for (let i = 0; i < str.length; i++) {
//         while (map[str[i]] == 1) {
//             map[str[start]] = 0;
//             start++;
//         }
//         map[str[i]] = 1;
//         maxCount = Math.max(maxCount, i - start + 1);
//     }
//     return maxCount;
// }

// console.log(sol(str));

//Qno36:
// let str = 'abcdefghijklm';
// let k = 13;

// function ascii(str, k) {
//     let asciiSum = 0;
//     let count = 0;
//     for (let i = 0; i < k; i++) {
//         asciiSum += str.charCodeAt(str[i]);
//     }
//     if (asciiSum%3==0) {
//         count++;
//     }
//     for (let i = k; i < str.length; i++) {
//         asciiSum = asciiSum + str.charCodeAt(i);
//         asciiSum = asciiSum - str.charCodeAt(i - k);
//         if (asciiSum % 3 == 0) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(ascii(str, k));

//Qno37:
// let arr = [-20, -12, 42, -10, 25];
// let k = arr.length;

// function largestSum(arr, k) {
//     let currSum = 0, maxSum = -Infinity;
//     for (let i = 0; i < k; i++) {
//         currSum += arr[i];
//         if (currSum > maxSum) {
//             maxSum = currSum;
//         }
//         if (currSum < 0) {
//             currSum = 0;
//         }
//     }
//     return maxSum;
// }

// console.log(largestSum(arr,k));

// let str = 'aaba';
// let k = 2;

//BRUTE FORCE:
//TO BE OPTIMISED:
//NEGATIVE,AND TWO MORE QUESTIONS TO DO....
// function distChar(str, k) {
//     let count = 0;
//     let map = {};
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             if (!map[str[j]]) {
//                 map[str[j]] = true;
//             }
//             if (Object.keys(map).length == k) {
//                 count++
//             }
//         }
//         map = {};
//     }
//     return count;
// }

// console.log(distChar(str, k));







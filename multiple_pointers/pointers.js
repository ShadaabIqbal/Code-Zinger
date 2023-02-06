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

//Qno48:
// let arr = [2,3,4,6,7];
// let k = 2;
// function reverse(a,i,j) {
//     while (i<j) {
//         a[i] = a[i]+a[j];
//         a[j] = a[i]-a[j];
//         a[i] = a[i]-a[j];
//         i++;
//         j--;
//     }
//     return a;
// }

// function rotate(arr) {
//    reverse(arr,0,arr.length-1);
//    reverse(arr,0,k-1);
//    reverse(arr,k,arr.length-1);
//    return arr;
// }
// console.log(rotate(arr));

// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 12, 13, 14, 21, 45, 65, 23, 34, 54, 56];

//Qno49:
// function findUnique(arr) {
//     let map = new Map();
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         map.set(arr[i], (map.get(arr[i]) || 0) + 1);
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (map.get(arr[i]) == 1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr.length;
// }
// console.log(findUnique(arr));

//Qno50:
// let arr = [1,5,7,2,3];
// let k = 5;

// function sum(arr, k) {
//     let map = new Map()
//     for (let i = 0; i < arr.length; i++) {
//         if (map.has(k - arr[i])) {
//             return true;
//         }
//         map.set(arr[i], (map.get(arr[i]) || 0) + 1);
//     }
//     return false;
// }

// console.log(sum(arr, k));

// let arr = [1, 1, 2, 22, 3, 5, 35, 11, 2];

//Qno51:
// function unique(arr) {
//     let map = {}
//     let newArr = [];
//     for (const i of arr) {
//         map[i] = (map[i] || 0) + 1;
//     }
//     for (const i in map) {
//         if (map[i] === 1) {
//             newArr.push(i);
//         }
//     }
//     return newArr;
// }
// console.log(dup(arr));


//Qno52:
// let arr = [1, 5, 7, 1]
// let k = 6
// function getPairsCount(arr, n, k) {
//     let map = new Map()
//     let ans = 0
//     for (let i = 0; i < n; i++) {
//         let x = k - arr[i]
//         if (map.has(x)) {
//             ans += map.get(x);
//         }
//         map.set(arr[i], (map.get(arr[i]) || 0) + 1);
//     }
//     return ans;
// }
// console.log(getPairsCount(arr,arr.length, k));

//Qno53:
// let str = 'aabb';
// function remove() {
//     let i=0
//     let j=i+1
//     let res=''
//     while (i<str.length) {
//         if (str[i]!=str[j]) {
//             res+=str[i];
//         }
//         i++
//         j++
//     }
//     return res;
// }
// console.log(remove(str));

//Qno54:
// let arr = [1, 4, 45, 6, 0, 19]
// let x = 51

// function smallest(a,x) {
//     let i = 0,
//         j = 0,
//         sum = 0,
//         len = a.length;
//     while (j < a.length) {
//         while (sum <= x) {
//             sum += a[j++];
//             if (sum > x) {
//                 len = Math.min(len, j - i);
//             }
//         }
//         while (sum > x) {
//             sum -= a[i++];
//             if (sum > x) {
//                 len = Math.min(len, j - i);
//             }
//         }
//     }
//     return len;
// }
// console.log(smallest(arr, x));

//Qno55:
// let str = 'aaabbbbccccc'
// function sol(a) {
//     let obj = {};
//     let max1 = 0;
//     let max2 = 0;
//     for (const i of a) {
//         obj[i] = (obj[i] || 0) + 1;
//     }
//     for (const i in obj) {
//         if (obj[i] > max1) {
//             max2 = max1;
//             max1 = obj[i];
//         } else if (obj[i] > max2) {
//             max2 = obj[i];
//         }
//     }
//     for (let i in obj) {
//         if (obj[i] == max2) {
//             max2 = i;
//         }
//     }
//     return max2;
// }

// console.log(sol(str));


















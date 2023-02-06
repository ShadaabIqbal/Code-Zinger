//Qno32:
// let b = [5, 1, 2, 3, 4, 1, 2, 7];
// let a = b.length;

// let nums = [0,1,2,3,4,5,0];
// let k = 6;

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
// let str = 'abcdefghijklm'
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


//Qno38:
// function findDiff(arr, l, n) {
//     arr.sort((a, b) => a - b);
//     let i = 0;
//     let j = l - 1;
//     while (i < j) {
//         if (Math.abs(arr[i] - arr[j]) > n) {
//             j--;
//         } else if (Math.abs(arr[i] - arr[j]) < n) {
//             i++
//         } else if (Math.abs(arr[i] - arr[j]) == n) {
//             return 1;
//         }
//     }
//     return -1;
// }

// console.log(findDiff(arr, L, N));

//Qno39:
// let people = [1,2];
// let limit = 3;

// function numRescueBoats(people, limit) {
//     people.sort((a, b) => a - b);
//     let start = 0;
//     let end = people.length - 1;
//     let boatsCount = 0;
//     while (start <= end) {
//         if (people[start] + people[end] <= limit) {
//             start++;
//             end--;
//             boatsCount++;
//         } else {
//             end--;
//             boatsCount++;
//         }
//     }
//     return boatsCount;
// }

// console.log(numRescueBoats(people,limit));


// //Qno40:
// let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
// let k = 2;

// function longestOnes(nums, k) {
//     let map = new Map();
//     let left = 0;
//     let right = 0;
//     let maxLength = 0;
//     for (right = 0; right < nums.length; right++) {
//         map.set(nums[right], (map.get(nums[right]) || 0) + 1);
//             while (map.get(0) > k) {
//                 map.set(nums[left], map.get(nums[left]) - 1);
//                 left++;
//             }
//         maxLength = Math.max(maxLength, right - left + 1);
//     }
//     return maxLength;
// }

// console.log(longestOnes(nums,k));

//Qno45:
// let nums = [1,2,1,3,4];
// let k = 3;

// function noOfGoodArrays(nums, k) {
//     return subarraysWithKDistinct(nums, k) - subarraysWithKDistinct(nums, k - 1);
// }

// function subarraysWithKDistinct(nums, k) {
//     let map = new Map();
//     let right = 0;
//     let left = 0;
//     let maxCount = 0;
//     for (right = 0; right < nums.length; right++) {
//         map.set(nums[right], (map.get(nums[right]) || 0) + 1);
//         if (map.get(nums[right]) === 1) {
//             k--;
//         }
//         while (k < 0) {
//             map.set(nums[left], (map.get(nums[left])) - 1);
//             if (map.get(nums[left]) === 0) {
//                 k++;
//             }
//             left++;
//         }
//         maxCount += right - left + 1;
//     }
//     return maxCount;
// }

// console.log(noOfGoodArrays(nums, k));

//Qno46:
// let s = "AABABBA";
// let k = 1;
// var characterReplacement = function (s, k) {
//     let map = new Map();
//     let maxLength = 0;
//     let maxFreq = 0;
//     let left = 0;
//     let right = 0;
//     for (right = 0; right < s.length; right++) {
//         map.set(s[right], (map.get(s[right]) || 0) + 1);
//         maxFreq = Math.max(maxFreq, map.get(s[right]));
//         while (maxFreq + k < right - left + 1) {
//             map.set(s[left], map.get(s[left]) - 1);
//             left++;
//         }
//         maxLength = Math.max(maxLength, right - left + 1);
//     }
//     return maxLength;
// };

// console.log(characterReplacement(s,k));

//Qno47:
// let str = 'aabbccbac';

// function dist(str) {
//     let mySet = new Set();
//     for (let i = 0; i < str.length; i++) {
//         mySet.add(str[i]);
//     }
//     let map = new Map();
//     let right = 0;
//     let left = 0;
//     let setSize = mySet.size;
//     let minLength = str.length;
//     for (right = 0; right < str.length; right++) {
//         map.set(str[right], (map.get(str[right]) || 0) + 1);
//         if (map.size == setSize) {
//             while (map.get(str[left]) > 1) {
//                 map.set(str[left], map.get(str[left]) - 1);
//                 left++;
//             }
//             minLength = Math.min(minLength, right - left + 1);
//         }
//     }
//     return minLength;
// }

// console.log(dist(str));

// var lengthOfLongestSubstring = function (s) {
//     let map = new Map()
//     let i = 0
//     let j = 0
//     let currLen = 0
//     let maxLen = 0
//     for (j = 0; j < s.length; j++) {
//         while (map.get(s[j]) == 1) {
//             map.set(s[i], 0)
//             i++
//         }
//         map.set(s[j], 1)
//         currLen = j - i + 1;
//         if (maxLen < currLen) {
//             maxLen = currLen
//         }
//     }
//     return maxLen
// };

// console.log(lengthOfLongestSubstring('pwwkew'));













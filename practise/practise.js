//Qno23:
// let s1 = 'abbc'
// let s2 = 'abbc'
// function isAnagram(s1, s2) {
//     if (s1.length != s2.length) {
//         return false;
//     }
//     let count = new Array(26);
//     for (let i = 0; i < 26; i++) {
//         count[i] = 0;
//     }
//     for (let i = 0; i < s1.length; i++) {
//         count[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
//         count[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
//     }
//     for (let i = 0; i < 26; i++) {
//         if (count[i] != 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isAnagram(s1, s2));



// let arr1 = [2, 3, 4, 5, 7]
// let arr2 = [4, 9, 16, 25, 36]
// function issq(a1, a2) {
//     let obj1 = {}
//     let obj2 = {}
//     for (const i of a1) {
//         obj1[i] = (obj1[i] || 0) + 1;
//     }
//     for (const i of a2) {
//         obj2[i] = (obj2[i] || 0) + 1;
//     }
//     for (const i in obj1) {
//         if (obj2[i * i] != obj1[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(issq(arr1, arr2));



// let arr = [1, 1, 2, 2, 3]
// function sol(arr) {
//     let obj = {}
//     for (const i of arr) {
//         obj[i] = (obj[i] || 0) + 1;
//     }
//     let values = Object.values(obj);
//     let keys = Object.keys(obj);
//     for (let i = 0; i < values.length; i++) {
//         if (values.lastIndexOf(values[i]) == values.indexOf(values[i])) {
//             return keys[i];
//         }
//     }
//     return -1;
// }
// console.log(sol(arr));



//PREFIX SUM:
// let arr = [200, 200, 200, -400, 200], k = 200;
// function prefix(arr, k) {
//     let map = new Map();
//     let prefixSum = 0;
//     let ansCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         map.set(0, 1);
//         prefixSum += arr[i];
//         if (map.has(prefixSum - k)) {
//             ansCount += map.get(prefixSum - k);
//         }
//         map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
//     }
//     return ansCount;
// }
// console.log(prefix(arr, k));



//TWO POINTERS:
// let arr = [-5, -3, -2, 1, 5, 7];
// function sumZero(arr) {
//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         if (arr[i] + arr[j] > 0) {
//             j--
//         } else if (arr[i] + arr[j] < 0) {
//             i++
//         } else {
//             return (arr[i]+","+arr[j]);
//         }
//     }
//     return false;
// }

// console.log(sumZero(arr));



//TWO POINTER:
// let arr = [10, 22, 28, 29, 30, 40];
// let x = 54;
// function sum(arr, x) {
//     let i = 0;
//     let j = arr.length - 1;
//     let proximity = Infinity;
//     let pair = '';
//     while (i < j) {
//         if (Math.abs(arr[i] + arr[j] - x) < proximity) {
//             pair = arr[i] + ',' + arr[j];
//             proximity = Math.abs(arr[i] + arr[j] - x);
//         }
//         if (arr[i] + arr[j] > x) {
//             j--
//         } else if (arr[i] + arr[j] < x) {
//             i++
//         }
//     }
//     return pair;
// }
// console.log(sum(arr, x));



//LARGEST PAIR SUM:
// let arr = [100000, 2, 1111, 4, 1000]
// function largestPairSum(arr) {
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
// console.log(largestPairSum(arr));



//TWO SUM II:
// let numbers = [2, 11, 15, 7];
// let target = 26;
// function twoSum(numbers, target) {
//     let i = 0;
//     let j = numbers.length - 1;
//     let arr = [];
//     while(i < j){
//         if(numbers[i]+numbers[j] == target){
//             arr.push(i+1,j+1);
//         }
//         if(numbers[i]+numbers[j] > target){
//             j--
//         }else{
//             i++
//         }
//     }
//     return arr;
// }
// console.log(twoSum(numbers, target));



//DUTCH NATIONAL FLAG:
// let arr = [1, 2, 1, 0, 0, 2, 1, 1, 0];
// function sol(arr) {
//     let low = 0
//     let mid = 0
//     let high = arr.length - 1
//     while (mid < high) {
//         if (arr[mid] == 0) {
//             arr[low] = arr[low] + arr[mid]
//             arr[mid] = arr[low] - arr[mid]
//             arr[low] = arr[low] - arr[mid]
//             low++
//             mid++
//         } else if (arr[mid] == 2) {
//             arr[mid] = arr[mid] + arr[high]
//             arr[high] = arr[mid] - arr[high]
//             arr[mid] = arr[mid] - arr[high]
//             high--
//         } else {
//             mid++
//         }
//     }
//     return arr;
// }
// console.log(sol(arr));



//CONTAINS DUPLICATE II:
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



// MAX SUM OF SUBARRAY OF SIZE K:
// let Arr = [100, 200, 300, 400, 300, 200, 100, 400, 200];
// let N = 9;
// let K = 3;
// function maxSum(arr, k) {
//     let currSum = 0;
//     let maxSum = 0;
//     for (let i = 0; i < k; i++) {
//         currSum += arr[i];
//     }
//     maxSum = currSum;
//     for (let i = k; i < arr.length; i++) {
//         currSum += arr[i];
//         currSum -= arr[i - k];
//         maxSum = Math.max(maxSum, currSum);
//     }
//     return maxSum;
// }
// console.log(maxSum(Arr, K));



//LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS:
// let str = 'abcadbcbb'
// function longest(s) {
//     let obj = {}
//     let j = 0
//     let max = 0
//     for (let i = 0; i < s.length; i++) {
//         while (obj[s[i]] == 1) {
//             obj[s[j]] = 0
//             j++
//         }
//         obj[s[i]] = 1
//         max = Math.max(max, i - j + 1);
//     }
//     return max;
// }
// console.log(longest(str));



//find the number of substrings of length K whose sum of ASCII value of characters is divisible by K:
// let str = 'abcdefghijklm';
// let k = 3;
// function maxascii(s) {
//     let currAscii = 0;
//     let count = 0;
//     for (let i = 0; i < k; i++) {
//         currAscii += s[i].charCodeAt(0)
//     }
//     if (currAscii % k == 0) {
//         count++
//     }
//     for (let i = k; i < s.length; i++) {
//         currAscii += s[i].charCodeAt(0)
//         currAscii -= s[i - k].charCodeAt(0)
//         if (currAscii % k == 0) {
//             count++
//         }
//     }
//     return count;
// }
// console.log(maxascii(str, k));



//find the largest sum of contiguous elements in sub-array of an array:
// let arr = [-20, -12, 42, -10, 25]
// function max(arr) {
//     let maxSum = -Infinity
//     let currSum = 0
//     for (let i = 0; i < arr.length; i++) {
//         currSum += arr[i]
//         if (currSum > maxSum) {
//             maxSum = currSum;
//         }
//         if (currSum < 0) {
//             currSum = 0;
//         }
//     }
//     return maxSum;
// }
// console.log(max(arr));




//find if there exists a pair of elements in the array whose difference is N.
// let arr = [5, 20, 3, 2, 5, 80];
// let n = 78;
// function diff(arr, n) {
//     let map = new Map()
//     for (let i = 0; i < arr.length; i++) {
//         map.set(arr[i], (map.get(arr[i]) || 0) + 1);
//         if (n == 0 && map.get(arr[i]) > 1) {
//             return (arr[i]+','+arr[i]);
//         }
//     }
//     if (n == 0) {
//         return false;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (map.has(n + arr[i])) {
//             return (arr[i]+','+(n+arr[i]));
//         }
//     }
//     return false;
// }
// console.log(diff(arr, n));



//Return the minimum number of boats to carry every given person.
// let people = [3, 2, 2, 1], limit = 3;
// function min(arr, k) {
//     arr.sort((a, b) => a - b)
//     let i = 0
//     let j = arr.length - 1
//     let boatsCount = 0
//     while (i <= j) {
//         if (arr[i] + arr[j] <= k) {
//             i++
//             j--
//             boatsCount++
//         } else if (arr[i] + arr[j] > k) {
//             j--
//             boatsCount++
//         }
//     }
//     return boatsCount;
// }
// console.log(min(people,limit));



//return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
// let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2;
// function longestOnes(arr, k) {
//     let map = new Map()
//     let maxLen = 0
//     let i = 0
//     let j = 0
//     for (i = 0; i < arr.length; i++) {
//         map.set(arr[i], (map.get(arr[i]) || 0) + 1)
//         while (map.get(0) > k) {
//             map.set(arr[j], (map.get(arr[j]) - 1))
//             j++
//         }
//         maxLen = Math.max(maxLen, i - j + 1)
//     }
//     return maxLen
// }
// console.log(longestOnes(nums, k));




//REVERSE A STRING USING RECURSION:
// let str = 'hello'
// function reverse(str) {
//     if (str.length <= 0) {
//         return str;
//     }
//     return reverse(str.slice(1))+str[0];
// }
// console.log(reverse(str));



//PALINDROME USING RECURSION:
// let str = 'madam'
// function isPlr(str) {
//     if (str.length <= 1) {
//         return true;
//     }
//     if (str[0] == str.slice(-1)) {
//         return isPlr(str.slice(1, -1))
//     }
//     return false;
// }
// console.log(isPlr(str));




//Longest Repeating Character Replacement:
// let s = "AABABBA";
// let k = 1;
// function maxSub(str, k) {
//     let map = new Map()
//     let left = 0
//     let right = 0
//     let maxLen = 0
//     let maxFreq = 0
//     for (right = 0; right < str.length; right++) {
//         map.set(str[right], (map.get(str[right]) || 0) + 1)
//         maxFreq = Math.max(maxFreq, map.get(str[right]))
//         while ((right - left + 1) - maxFreq > k) {
//             map.set(str[left], (map.get(str[left]) - 1))
//             left++
//         }
//         maxLen = Math.max(maxLen, right - left + 1);
//     }
//     return maxLen;
// }
// console.log(maxSub(s, k));




//Smallest window that contains all characters of string itself:
// let str = 'aabbccbac'
// function min(str) {
//     let mySet = new Set()
//     for (let i = 0; i < str.length; i++) {
//         mySet.add(str[i])
//     }
//     let setSize = mySet.size;
//     let map = new Map()
//     let minLen = str.length;
//     let i = 0
//     let j = 0
//     for (i = 0; i < str.length; i++) {
//         map.set(str[i], (map.get(str[i]) || 0) + 1)
//         if (setSize == map.size) {
//             while (map.get(str[j]) > 1) {
//                 map.set(str[j], (map.get(str[j]) - 1))
//                 j++
//             }
//             minLen = Math.min(minLen, i - j + 1)
//         }
//     }
//     return minLen;
// }
// console.log(min(str));




//Rotate using reverse and swap without using extra variables:
// let arr = [2,3,4,6,7];
// let k = 2;
// function reverse(arr,i,j) {
//     while (i<j) {
//         arr[i]=arr[i]+arr[j]
//         arr[j]=arr[i]-arr[j]
//         arr[i]=arr[i]-arr[j]
//         i++
//         j--
//     }
//     return arr;
// }
// function rotate(arr) {
//     reverse(arr,0,arr.length-1)
//     reverse(arr,0,k-1)
//     return arr;
// }
// console.log(rotate(arr));




//Determine whether or not there exist two elements in Arr whose sum is exactly X:
// let arr = [1, 4, 45, 6, 10, 8]
// let k = 16
// function find(arr, k) {
//     let map = new Map()
//     for (let i = 0; i < arr.length; i++) {
//         if (map.has(k - arr[i])) {
//             return true;
//         }
//         map.set(arr[i], (map.get(arr[i]) || 0) + 1)
//     }
//     return false;
// }
// console.log(find(arr, k));




//find the number of pairs of elements in the array whose sum is equal to K:
// let arr = [1, 5, 7, 1]
// let k = 6
// function pairs(arr, k) {
//     let map = new Map()
//     let ans = 0
//     for (let i = 0; i < arr.length; i++) {
//         let x = arr[i]
//         if (map.has(k - x)) {
//             ans += map.get(k - x)
//         }
//         map.set(x, (map.get(x) || 0) + 1)
//     }
//     return ans;
// }
// console.log(pairs(arr, k));




//find the smallest subarray with sum greater than the given value:
// let arr = [1, 4, 45, 6, 0, 19]
// let x = 51
// function smallest(arr, x) {
//     let min = arr.length
//     let sum = 0
//     let i = 0
//     let j = 0
//     while (j < arr.length) {
//         while (sum <= x) {
//             sum += arr[j++]
//             if (sum > x) {
//                 min = Math.min(min, j - i)
//             }
//         }
//         while (sum > x) {
//             sum -= arr[i++]
//             if (sum > x) {
//                 min = Math.min(min, j - i)
//             }
//         }
//     }
//     return min;
// }
// console.log(smallest(arr, x));




//KOKO EATING BNANAS:
// let piles = [3, 6, 7, 11], h = 8;
// function sol(piles, mid) {
//     let time = 0
//     for (let i = 0; i < piles.length; i++) {
//         time += Math.ceil(piles[i] / mid)
//     }
//     return time
// }
// function minSpeed(piles, h) {
//     let maxSize = 0
//     let ans = 0
//     for (let i = 0; i < piles.length; i++) {
//         if (piles[i] > maxSize) {
//             maxSize = piles[i]
//         }
//     }
//     let low = 1
//     let high = maxSize
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)
//         let timeTaken = sol(piles, mid)
//         if (timeTaken > h) {
//             low = mid + 1
//         } else {
//             ans = mid
//             high = mid - 1
//         }
//     }
//     return ans;
// }
// console.log(minSpeed(piles, h));




//Find First and Last Position of Element in Sorted Array:
let nums = [5, 7, 7, 8, 8, 10], target = 8;
function find(nums, target) {
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] == target) {
            low = mid
            high = mid
            while (low >= 0 && nums[low] == target) {
                low--
            }
            while (high < nums.length && nums[high] == target) {
                high++
            }
            break;
        } else if (nums[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    if (low > high) {
        return (-1 + ',' + -1)
    }
    return (low + 1) + ',' + (high - 1)
}
console.log(find(nums, target));









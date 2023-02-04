// let piles = [30, 11, 23, 4, 20], h = 5;

// function sol(piles, mid) {
//     let time = 0;
//     for (let i = 0; i < piles.length; i++) {
//         time += Math.ceil(piles[i] / mid);
//     }
//     return time;
// }

// function minSpeed(piles, h) {
//     let maxSize = 0;
//     for (let i = 0; i < piles.length; i++) {
//         if (piles[i] > maxSize) {
//             maxSize = piles[i];
//         }
//     }
//     let l = 1;
//     let r = maxSize;
//     let ans = piles.length;
//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);
//         let timeTaken = sol(piles, mid);
//         if (timeTaken <= h) {
//             ans = mid;
//             r = mid - 1;
//         } else {
//             l = mid + 1;
//         }
//     }
//     return ans;
// }

// console.log(minSpeed(piles, h));

//Qno57:
// let arr = [5, 7, 7, 8, 8, 10], target = 8;

// function findIndex(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] < target) {
//             low = mid + 1;
//         } else if (arr[mid] > target) {
//             high = mid - 1;
//         } else {
//             low = mid;
//             high = mid;
//             while (low >= 0 && arr[low] == target) {
//                 low -= 1;
//             }
//             while (high <= arr.length - 1 && arr[high] == target) {
//                 high += 1;
//             }
//             break;
//         }
//     }
//     if (low > high) {
//         return [-1, -1];
//     }
//     return [low + 1, high - 1];
// }

// console.log(findIndex(arr, target));


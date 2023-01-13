/*----------------------------FREQUENCY COUNTING METHOD-----------------------*/
//Qno:23
//Time complexity: O(n)
//Space complexity: O(n)

// let arr1 = [2, 3, 4, 5, 6];
// let arr2 = [4, 9, 16, 25, 36];
// function isPresent(a, b) {
//     let obj1 = {}
//     let obj2 = {}
//     if (a.length != b.length) { return false };
//     for (let i in a) {
//         if (!obj1[a[i]]) {
//             obj1[a[i]] = 1;
//         } else {
//             obj1[a[i]]++;
//         }
//     }
//     for (let i in b) {
//         if (!obj2[b[i]]) {
//             obj2[b[i]] = 1;
//         } else {
//             obj2[b[i]]++;
//         }
//     }
//     for (let i in obj1) {
//         if (obj2[i * i] != obj1[i]) return false;
//     }
//     return true;
// }

// console.log(isPresent(arr1, arr2));
/*--------------------------------------------------------------------------------------------------------*/

//Qno:24
//Time complexity: O(n)
//Space complexity: O(n)
// let a = 'night'
// let b = 'thing'

// function isAnagram(a, b) {
//     let obj = {}
//     for (const i of a) {
//         if (!obj[i]) {
//             obj[i] = 1;
//         } else {
//             obj[i]++
//         }
//     }
//     for (const i of b) {
//         if (!obj[i]) {
//             return false
//         } else {
//             obj[i]--
//         }
//         if (obj[i] == 0) {
//             delete obj[i];
//         }
//     }
//     if (Object.keys(obj).length === 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isAnagram(a,b));
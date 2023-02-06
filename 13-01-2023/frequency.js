/*----------------------------FREQUENCY COUNTING METHOD-----------------------*/
//Qno:23
//Time complexity: O(n)
//Space complexity: O(n)

// let arr1 = [2, 3, 4, 5, 6];
// let arr2 = [4, 9, 16, 25, 36];
// function isPresent(a, b) {
// let obj1 = {}
// let obj2 = {}
// if (a.length != b.length) { return false };
// for (let i in a) {
//     if (!obj1[a[i]]) {
//         obj1[a[i]] = 1;
//     } else {
//         obj1[a[i]]++;
//     }
// }
// for (let i in b) {
//     if (!obj2[b[i]]) {
//         obj2[b[i]] = 1;
//     } else {
//         obj2[b[i]]++;
//     }
// }
// for (let i in obj1) {
//     if (obj2[i * i] != obj1[i]) return false;
// }
// return true;
// }

// console.log(isPresent(arr1, arr2));
/*--------------------------------------------------------------------------------------------------------*/

// Qno:24
// Time complexity: O(n)
// Space complexity: O(1)

// function isAnagram(a, b) {
// let count1 = new Array(26);
// let count2 = new Array(26);

// if (a.length != b.length) { return false }

// for (let i = 0; i < count1.length; i++) {
//     count1[i] = 0;
//     count2[i] = 0;
// }

// for (let i = 0; i < a.length && b.length; i++) {
//     count1[a[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)]++
//     count2[b[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)]++
// }

// for (let i = 0; i < 26; i++) {
//     if (count1[i] != count2[i]) {
//         return false;
//     }
// }
// return true;
// }

// console.log(isAnagram('azz', 'azz'));

//Qno25:
// function findFreq(a) {
//     let s = a.split(' ');
//     let map = {}

//     for (let i = 0; i < s.length; i++) {
//         if (map.hasOwnProperty(s[i])) {
//             map[s[i]]++
//         } else map[s[i]] = 1;
//     }

//     let res = 0;
//     let values = Object.values(map);
//     let keys = Object.keys(map);
//     console.log(values);
//     for (let i = 0; i < values.length; i++) {
//       if (values.lastIndexOf(values[i]) == values.indexOf(values[i])) {
//         res = keys[i];
//       }

//     }
//     return res;
// }

// console.log(findFreq(str));

// let a = 12252144
// let b = a.toString()

// function freq(a) {
//     let map = {}

//     for (const i of a) {
//         if (map.hasOwnProperty(i)) {
//             map[i]++
//         } else map[i] = 1;
//     }

//     let arr = [];
//     for (const key in map) {
//         if (map.hasOwnProperty.call(map, key) && key != " ") {
//             arr.push(key + " " + map[key]);
//         }
//     }

//     return arr.join("\n");
// }

// console.log(freq(b));



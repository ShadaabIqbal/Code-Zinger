//Qno58:
// function total_count(arr, n) {
//     let count = 0;

//     // Storing the occurrence of
//     // every element in array in
//     // unordered_map
//     let freq = new Map();

//     for (let i = 0; i < n; i++) {
//         if (!freq.has(arr[i])) {
//             freq.set(arr[i], 1);
//         }
//         else {
//             freq.set(arr[i], freq.get(arr[i]) + 1);
//         }
//     }

//     // Iterating through every element
//     // and finding all the divisors of
//     // that element and then checking
//     // how many of them are present
//     // in array arr[]
//     for (let i = 0; i < n; i++) {
//         for (let j = 1; j <= Math.sqrt(arr[i]); j++) {
//             if (arr[i] % j == 0) {
//                 if (arr[i] == j * j) { // If divisors
//                     // are equal,
//                     // then take only one as
//                     // it will be perfect square
//                     // root of arr[i]
//                     count += freq.get(j);
//                 }
//                 else {
//                     // Else take both j and arr[i]/j
//                     // as both will be divisors
//                     count += freq.get(j) + freq.get(arr[i] / j);
//                 }
//             }
//         }
//         // As all the elements is divisible
//         // by itself and is counted in freq[]
//         // so reducing its count
//         count = count - 1;
//     }

//     // Returning final count
//     return count;
// }

// let arr = [1, 2, 3];
// let N = arr.length;

// console.log(total_count(arr, N));

// let array1 = [
//     { name: 'a', value: '123' },
//     { name: 'b', value: '666' }
// ]
// let array2 = [
//     { name: 'c', value: '444' },
//     { name: 'd', value: '999' },
//     { name: 'b', value: '111' }
// ]

// function merge(arr1, arr2) {
//     let map = new Map();

//     for (let i = 0; i < arr1.length; i++) {
//         let a = arr1[i].name;
//         if (map.has(a)) {
//             if (arr1[i].value < map.get(a)) {
//                 map.set(a, arr1[i].value);
//             }
//         } else {
//             map.set(a, arr1[i].value);
//         }
//     }

//     for (let i = 0; i < arr2.length; i++) {
//         let a = arr2[i].name;
//         if (map.has(a)) {
//             if (arr2[i].value < map.get(a)) {
//                 map.set(a, arr2[i].value);
//             }
//         } else {
//             map.set(a, arr2[i].value);
//         }
//     }

//     let arr = [];
//     map.forEach((value, key) => {
//         arr.push({ name: key, value: value })
//     })
//     return arr;
// }

// console.log(merge(array1, array2));

//Qno60:
// let arr=[3,2,4,7];

// function sol(arr) {
//     let s=''
//     let alpha=['']
//     for (let i = 97; i <= 122; i++) {
//         s+=String.fromCharCode(i);
//         alpha.push(s);
//     }
//     for (let i = 0; i < arr.length; i++) {
//         arr[i]=alpha[arr[i]];
//     }
//     return arr;
// }

// console.log(sol(arr));

// let arr = [1, 2, 3, 5]

//Qno61:
// function missing(arr) {
//     let n = arr.length+1;
//     let sum1 = n * ((n + 1) / 2);
//     let sum2 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum2 += arr[i];
//     }
//     let ans = sum1 - sum2;
//     return ans;
// }

// console.log(missing(arr));





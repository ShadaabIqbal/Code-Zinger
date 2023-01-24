//Qno41:
// var findTheWinner = function(n, k) {
//     return recursion(n,k)+1;
// }

// var recursion = (n,k) => {
//       //base case
//   if(n == 1)
//       return 0;


//   //general case
//   return (recursion(n-1, k)+k)%n;

// };

// console.log(findTheWinner(6,2));.

//Qno42:
// function reverse(s) {
//     if (s.length <= 1) {
//         return s;
//     }
//     return reverse(s.slice(1)) + s[0];
// }

// console.log(reverse('hello'));

//Qno43:
// function isPlr(s) {
//     if (s.length <= 1) {
//         return true;
//     }
//     if (s[0] == s.slice(-1)) {
//         return isPlr(s.slice(1,-1))
//     }
//     return false;
// }

// console.log(isPlr('madam'));

//Qno44:
// let s = ['h','e','l','l','o'];

// function recursive(s, start, end) {
//     if (start >= end) {
//         return;
//     }
//     let temp = s[start];
//     s[start] = s[end];
//     s[end] = temp;
//     return recursive(s, start + 1, end - 1);
// }

// function isPlr(s) {
//     recursive(s, 0, s.length - 1);
//     return s;
// }

// console.log(isPlr(s));

// function cap(arr) {
//     let newArr = [];
//     if (arr.length == 0) { return [] }
//     let s = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
//     newArr.push(s);
//     return newArr.concat(cap(arr.slice(1)));
// }

// console.log(cap(['hello', 'hola', 'hey']));

// function reverse(w) {
//     if (w <= 1) { return w }
//     return reverse(w.slice(1)) + w[0];
// }

// function sen(sen) {
//     let arr = sen.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//     arr[i] = reverse(arr[i]);
//     }
//     return arr.join(' ');
// }

// console.log(sen('They are playing'));

// let arr = [23, 2, 3, 1, 2, 1, 3];
// function dup(arr) {
//     let map = new Map();
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         map.set(arr[i], (map.get(arr[i]) || 0) + 1);
//         if (map.get(arr[i]) > 1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(dup(arr));






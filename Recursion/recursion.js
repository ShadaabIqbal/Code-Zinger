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


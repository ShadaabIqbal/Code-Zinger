//Qno16:
// let n = 6;
/*Ist solution--------------------------------*/
// const isPowerOfTwo = n => {
//     while(n > 1){
//         n /= 2
//     }
    
//     return n === 1
// };

/*Second solution-----------------------------*/
// var isPowerOfTwo = function (n) {
//     let count = 0;
//     for (let i = 0; i=n; i++) {
//         if(count > 0){
//             n = count;
//         }
//         if (n < 1) {
//             return false;
//         } else if (n == 1) {
//             return true;
//         } else if (n % 2 == 1) {
//             return false;
//         }
//         let a = n / 2;
//         count = a;
//     }
//     if (count == 1) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(isPowerOfTwo(n));

//Qno17:
// let a = 'aacc'
// let b = 'acac'

// function isAna(s,t) {
// if(s.length !== t.length) {return false};
// let map = {};
// for (let i of s) {
//     if(!map[i]){
//         map[i] = 1;
//     }else{
//         map[i]++
//     }
// }
// for (const i of t) {
//     if(!map[i]){
//         return false;
//     }else {
//         map[i]--
//     }
//     if(map[i] === 0){
//         delete map[i]
//     }
// }
// if( Object.keys(map).length === 0 ){
//     return true;
// }else{
//     return false;
// }
// }
// console.log(isAna(a,b));
//Qno.6:
// function solution(a) {
//     //Write your solution here
//     let res1 = ''
//     let res2 = ''
//     for (let i = 0; i < a.length / 2; i++) {
//         res1 += a[i];
//     }
//     for (let j = 0; j < a.length / 2; j++) {
//         res2 += a[a.length - 1 - j]
//     }
//     if (res1 == res2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

//Qno.7:
// function sol(num1,num2){
//     let sum = 0
//     let arr = [num1, num2];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         sum += element;
//     }
//     let R = sum/arr.length;
//     return parseFloat(R).toFixed(2);
// }
// console.log(sol(num1,num2));

//Qno.8:
// function solution(a) {
//     //Write your solution here
//     if (a % 5 == 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
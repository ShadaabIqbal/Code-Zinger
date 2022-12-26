// //Qno.13:
// let num = ;
// let num1 = num.toString()
// let numStr = num1.split("")
// let reverseNum = numStr.reverse()
// let revNum = reverseNum.join("")


// function twistedPrime(a,b) {
//     let count = 0;
//     let count2 = 0;
//     for (let i = 1; i <= a; i++) {
//         if(a%i == 0){
//          count++;
//         }
//     }
//     for (let i = 1; i <= b; i++) {
//         if(b%i == 0){
//             count2++;
//         }
//     }
//     if(count == count2){
//         return 1;
//     }else{
//         return 0;
//     }
// }

// console.log(twistedPrime(num,revNum));

//Qno.14:
// let a = 3;
// let b = 4;
// let c = 5;

// function isPythagorean(a,b,c) {
//     let d = Math.pow(a,2);
//     let e = Math.pow(b,2);
//     let f = Math.pow(c,2);
//     if(d+e == f){
//         return 1;
//     }else{
//         return 0;
//     }
// }

// console.log(isPythagorean(a,b,c));

//Qno.15:
// let str = 'qwqqwqeqqwdsdadsdasadsfsdsdsdasasas'
// let k = 24;
// let strr = str.split("")

// function isPangram(str, k) {
//     if (str.length < 26) {
//         return 'No';
//     }
//     let visited = new Array(26);
//     for (let i = 0; i < str.length; i++) {
//         visited[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = true;
//     }
//     let count = 0;
//     for (let i = 0; i < 26; i++) {
//         if(!visited[i]){
//             count++;
//         }
//     }
//     if(count <= k){
//         return 1;
//     }else{
//         return 0;
//     }
// }

// console.log(isPangram(strr,k));






//Qno1:
// let N1 = 10
// let N2 = 20

// function sum(a,b) {
//     let sum = a+b
//     let R = sum
//     return R
// }

// console.log(sum(N1, N2))

//Qno2:
// let a = 3
// let b = 4

// function sum(a,b) {
//     let obj1 = {
//         a: a
//     }
//     let obj1Dup = obj1.a

//     let obj2 = {
//         b: b
//     }
//     let obj2Dup = obj2.b
//     let result = obj1Dup+obj2Dup
//     return result
// }

// console.log(sum(a,b));

//Qno3:
// let rad = 100

// function area(a) {
// let pi = 3.14
// let num = parseFloat(a).toFixed(2)
// let area = pi*num*num
// return parseFloat(area).toFixed(2)  
// }

// console.log(area(rad));

//Qno:4:
// let arr = [1,1,2]
// function sol(arr) {
//     let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element1 = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//         const element2 = arr[j];
//         let pairs = (element1,element2)
//         if (!res.includes(pairs)) {
//             res.push(pairs);
//         }
//    }
//  }
//  return res;
// }

// console.log(sol(arr));

//Qno5:
// let arr = [1,2,3,4];
// function sol(arr) {
//     let res = [];
// for (let i = 0; i < arr.length; i++) {
//     let eachNum = arr[i];
//     eachNum = arr[i - 1];
//     if (eachNum == undefined) {
//         eachNum = -1;
//     }
//     res.push(eachNum);
// }
// return res;
// }
// console.log(sol(arr));
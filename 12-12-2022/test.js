// let n = 4

// function sqr(n) {
//    let sum = 0
//    const firstEven = [];
//    for (let i = 2; i <= n*2; i++) {
//     const element = i;
//     if (element % 2 == 0){
//         firstEven.push(element);
//     }
//    }
//    for (let i = 0; i < firstEven.length; i++) {
//     const element = firstEven[i];
//     sum += element*element;
//    }
//    return sum;
// }

// console.log(sqr(n));

// let str = "HELLO"
// let str2 = str.split("")

// const checkUpper = function (str) {
//     let isUpperCase = ""
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if (element == element.toUpperCase()) {
//         isUpperCase = "Yes";
//         }else{
//         isUpperCase = "No"
//         }
//     }
//     return isUpperCase;
// }
// console.log(checkUpper(str));

// let N = 4
// function chckSqr(n) {
//     let perfctSqr = ""
//     for (let i = 0; i < 64; i++) {
//         const element = i;
//         if (element*element == n) {
//             perfctSqr = "Yes"
//             break;
//         }else{
//             perfctSqr = "No"
//         }
//     }
//     if (perfctSqr == "Yes") {
//         return 1
//     }else{
//         return 0
//     }
// }
// console.log(chckSqr(N));
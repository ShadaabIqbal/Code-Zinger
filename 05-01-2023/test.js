//Qno18:
// let x = 'abcgle'
// let y = 'ezggli'
// function isConvertible(a, b) {
//     let str1 = 'aeiou'
//     let str2 = 'bcdfghjklmnpqrstvwxyz'
//     let vowels = str1.split('');
//     let consonants = str2.split('');
//     let firstString = a.split('')
//     let secondString = b.split('');
//     for (let i = 0; i < firstString.length; i++) {
//         if (vowels.includes(firstString[i])) {
//             for (let j = 0; j < vowels.length; j++) {
//                 firstString[i] = vowels[j]
//                 if (firstString[i] == secondString[i]) {
//                     firstString[i] = secondString[i];
//                     break;
//                 }
//             }
//         }
//     }
//     for (let i = 0; i < firstString.length; i++) {
//         if (consonants.includes(firstString[i])) {
//             for (let j = 0; j < consonants.length; j++) {
//                 firstString[i] = consonants[j]
//                 if (firstString[i] == secondString[i]) {
//                     firstString[i] = secondString[i];
//                     break;
//                 }
//             }
//         }
//     }
//     let n1 = firstString.join('');
//     let n2 = secondString.join('');
//     if (n1 == n2) {
//         return true;
//     } else {
//         return false;
//     }
// }

//Qno:19:
// let num = 38998877;
// function add(a) {
// if (a%9 == 0) {
//     return 9;
// }else if(a%9 < 10){
//     return a%9;
// }
// }
// console.log(add(num));


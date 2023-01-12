//Qno20:
// let s1 = 'abc'
// let s2 = 'a'

// function findOccurence(s1, s2) {
//     let l1 = s1.length;
//     let l2 = s2.length;
//     if (l1 < l2) { return -1 };
//     if (s1.trim().length == 0 || s2.trim().length == 0) { return -1 };
//     for (let i = 0; i < l1; i++) {
//         let j;
//         for (j = 0; j < l2; j++) {
//             if (s1[i + j] != s2[j]) {
//                 break;
//             }
//         }
//         if (j == l2) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(findOccurence(s1, s2));

//Qno21:
// let word = 'asdfghjkqweryuixcvbnmdfghjrtyuvnmdfgrtydfgncv fgghertyhdfgnfvbcvbsdfgerg'

// function hardWords(a) {
//     let str = a.split(' ');
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (a.trim().length == 0) { return 0 };
//     let count = 0;
//     let hardWords = 0;
//     let easyWords = 0;
//     for (let i = 0; i < str.length; i++) {
//         count = 0;
//         let allChars = str[i].split('');
//         for (let j = 0; j < allChars.length; j++) {
//             if (!vowels.includes(allChars[j])) {
//                 count++
//             }
//         }
//         if (count > allChars.length / 2) {
//             hardWords++
//         } else {
//             easyWords++
//         }
//     }
//     let result = 5 * (hardWords) + 3 * (easyWords);
//     return result;
// }

// console.log(hardWords(word));


//Qno22:
// let str = 'The quick brown fox jumps';
// let strr = str.split("").filter(e => e != " ");

// function missingChars(str) {
//     let visited = new Array(26);
//     let myMissing = [];
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         let myStr = str[i].toLowerCase();
//         visited[myStr.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
//     }
//     for (let i = 0; i < 26; i++) {
//         if (!visited[i]) {
//             arr.push(i + 'a'.charCodeAt(0));
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         let missing = String.fromCharCode(arr[i]);
//         myMissing.push(missing);
//     }
//     return myMissing.join('');
// }

// console.log(missingChars(strr));



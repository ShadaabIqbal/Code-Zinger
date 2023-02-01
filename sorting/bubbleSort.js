// let arr = [1,3,4,5,6,7,2];

// function bubble(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let swapping = false;
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swapping = true;
//                 arr[j] = arr[j] + arr[j + 1];
//                 arr[j + 1] = arr[j] - arr[j + 1];
//                 arr[j] = arr[j] - arr[j + 1];
//             }
//         }
//         if (swapping == false) {
//             break;
//         }
//     }
//     return arr;
// }

// console.log(bubble(arr));

let arr = [5, 2, 4, 7, 9, 3, 1, 6, 8];

function recursive(s, start, end) {
    if (start >= end) {
        return;
    }
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    return recursive(s, start + 1, end - 1);
}

function sol(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] + arr[j + 1];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] = arr[j] - arr[j + 1];
            }
        }
    }
    let mid = Math.floor(arr.length/2)
    recursive(arr, mid, arr.length - 1);
    return arr;
}

console.log(sol(arr));
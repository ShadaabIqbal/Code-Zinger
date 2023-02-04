// let arr = [38, 27, 43, 3, 9, 82, 10];

// function merge(arr, l, m, h) {
//     let n1 = m - l + 1;
//     let n2 = h - m;
//     let arr1 = new Array(n1);
//     let arr2 = new Array(n2);

//     for (let i = 0; i < n1; i++)
//         arr1[i] = arr[l + i];
//     for (let j = 0; j < n2; j++)
//         arr2[j] = arr[m + 1 + j];

//     let i = 0;
//     let j = 0;
//     let k = l;
//     while (i < n1 && j < n2) {
//         if (arr1[i] <= arr2[j]) {
//             arr[k] = arr1[i];
//             i++;
//             k++;
//         } else {
//             arr[k] = arr2[j];
//             j++;
//             k++;
//         }
//     }
//     while (i < n1) {
//         arr[k] = arr1[i];
//         i++;
//         k++;
//     }

//     while (j < n2) {
//         arr[k] = arr2[j];
//         j++;
//         k++;
//     }
// }


// function mergeSort(arr, l, h) {
//     if (l >= h) {
//         return;
//     }
//     let m = parseInt((l + h) / 2);
//     mergeSort(arr, l, m);
//     mergeSort(arr, m + 1, h);
//     merge(arr, l, m, h);
// }

// function printArray(A, size) {
//     console.log(A);
// }

// var arr_size = arr.length;

// console.log("Given array is");
// printArray(arr, arr_size);

// mergeSort(arr, 0, arr_size - 1);

// console.log("Sorted array is");
// printArray(arr, arr_size);



//Qno10:
let N = 153;
let arr = N.toString().split('').map(Number);
function armstrong(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let powers = Math.pow(element, arr.length)
        totalSum += powers;
    }
    let num = arr.join('')
    if (totalSum == num) {
        return 'Yes';
    }else{
        return 'No';
    }
}
console.log(armstrong(arr));
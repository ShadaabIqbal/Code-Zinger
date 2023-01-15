//Qno26:
let arr = [200, 200, 200, -400, 200];
let k = 200;

function subArraySum(arr, k) {
    let prefixSum = 0;
    let answerCount = 0;
    let map = new Map;
    map.set(0, 1);
    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];
        if (map.has(prefixSum - k)) {
            answerCount += map.get(prefixSum - k);
        }
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return answerCount;
}

console.log(subArraySum(arr, k));


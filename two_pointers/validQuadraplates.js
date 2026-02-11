/* 
Given an array of integers and two integers k1 and k2, find the number of 
unique quadruples (a, b, c, d) such that a + b > k1 and c + d > k2. 
The quadruples should be counted only once, regardless of the order of the elements. 
*/

// video link: https://drive.google.com/file/d/1ZaW2csWFdSKu_onDtE4i3BVLV0pgO5KG/view
// docs link: https://docs.google.com/document/d/1HJ-uQ5VpiTRoW50S0L6sootpiOR_gJ1k6vHUxAiVgR0/edit?tab=t.0

// Example 1:

// Input: nums = [1,1,1,2,2,3,3,5,6,8], k1 = 5, k2 = 6
// Output: 2
// Explanation: The unique quadruples are [1,2,3,5], [1,2,3,6].


let arr = [1, 1, 1, 2, 2, 3, 3, 5, 6, 8]
let k1 = 5, k2 = 6

const validSubGreaterThanTargetCount = (arr, target) => {
    console.log(arr, target)
    let count = 0;
    let start = 0, end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum > target) {
            count += end - start;
            end--;
        } else {
            start++;
        }
    }
    return count;
}

const validQuadraplates = (arr, k1, k2) => {
    let count = 0
    for (let j = 1; j < arr.length - 2; j++) {
        let validK2Pairs = validSubGreaterThanTargetCount(arr.slice(j + 1, arr.length), k2);
        let validK1Pairs = validSubGreaterThanTargetCount(arr.slice(0, j + 1), k1)
        console.log(validK1Pairs, validK2Pairs)
        count += validK1Pairs + validK2Pairs
    }
    return count
}

console.log(validQuadraplates(arr, k1, k2))
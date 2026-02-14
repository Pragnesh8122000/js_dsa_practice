// Given an array of integers, find the length of the longest subarray with all distinct elements.

// Example 1:

// Input: [1,3,5,2,4,5,6,8,10]
// Output: 7

// similar leetcode problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/

let arr = [1,3,5,2,4,5,6,8,10];

let findMaxSubArray = (arr) => {
    let map = new Map();
    let left = 0, right = 0;
    let ml = 0;

    while (right < arr.length) {
        if (!map.has(arr[right])) {
            map.set(arr[right], right);
            ml = Math.max(ml, right - left + 1);
            right++;
        } else {
            let tempRIndex = map.get(arr[right]);
            
            while (left <= tempRIndex) {
                map.delete(arr[left]);
                left++;
            }
        }
    }

    return ml;
}

console.log(findMaxSubArray(arr));

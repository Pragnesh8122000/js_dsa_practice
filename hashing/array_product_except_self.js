// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]


// Best Approach
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let ans = new Array(nums.length).fill(1);
    let curr = 1
    for (let i = 0; i < nums.length; i++) {
        ans[i] *= curr;
        curr *= nums[i];
    }
    curr = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] *= curr;
        curr *= nums[i];
    }
    return ans;
};

// Basic Approach:
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {
//     let pref = [1];
//     let suff = new Array(nums.length).fill(0);
//     suff[nums.length-1] = 1
//     let ans = [];
//     for (let i = 1; i < nums.length; i++) {
//         pref[i] = pref[i - 1] * nums[i - 1];
//     }
//     for (let i = nums.length - 2; i >= 0; i--) {
//         suff[i] = suff[i + 1] * nums[i + 1];
//     }
//     for (let i = 0; i < nums.length; i++) {
//         ans[i] = pref[i] * suff[i];
//     }
//     return ans
// };



// Optimized Approach:
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {
//     let pref = [1];
//     let lastSuffix = 1;
//     let ans = [];
//     for (let i = 1; i < nums.length; i++) {
//         pref[i] = pref[i - 1] * nums[i - 1];
//     }
//     for (let i = nums.length - 1; i >= 0; i--) {
//         ans.unshift(lastSuffix*pref[i])
//         lastSuffix = lastSuffix * nums[i];
//     }
//     return ans
// };



// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k 
// and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let first = Infinity
    let second = Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= first) {
            first = nums[i]
        } else if (nums[i] <= second) {
            second = nums[i]
        } else {
            return true
        }
    }
    return false
};

// Example usage:
console.log(increasingTriplet([1, 2, 3, 4, 5])); // Output: true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // Output: false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // Output: true

// for increasingTriplet([2, 1, 5, 0, 4, 6])
// first = Infinity, second = Infinity
// i = 0, nums[0] = 2
// nums[0] <= first (2 <= Infinity) -> first = 2
// i = 1, nums[1] = 1
// nums[1] <= first (1 <= 2) -> first = 1
// i = 2, nums[2] = 5
// nums[2] <= first (5 <= 1) -> first = 1 but nums[2] <= second (5 <= Infinity) -> second = 5
// i = 3, nums[3] = 0
// nums[3] <= first (0 <= 1) -> first = 0
// i = 4, nums[4] = 4
// nums[4] <= first (4 <= 0) -> first = 0 but nums[4] <= second (4 <= 5) -> second = 4
// i = 5, nums[5] = 6
// nums[5] <= first (6 <= 0) -> first = 0 but nums[5] <= second (6 <= 4) -> second = 4 but nums[5] > second (6 > 4) -> return true
// Time Complexity: O(n)
// Space Complexity: O(1)
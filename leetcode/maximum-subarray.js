/**
 * @param {number[]} nums
 * @return {number}
 */

// Time O(n) - Space O(1)
var maxSubArray = function (nums) {
  let maxSum = (currentSum = nums[0]);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + currentSum <= nums[i]) {
      currentSum = nums[i];
    } else {
      currentSum += nums[i];
    }

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// https://leetcode.com/problems/maximum-subarray

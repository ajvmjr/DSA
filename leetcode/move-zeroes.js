/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Time O(n) - Space O(1)
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] == 0) {
      i++;
      continue;
    }

    let temp = nums[nonZeroIndex];
    nums[nonZeroIndex] = nums[i];
    nums[i] = temp;
    i++;
    nonZeroIndex++;
  }
};

// https://leetcode.com/problems/move-zeroes

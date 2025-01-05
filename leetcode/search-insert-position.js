/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
      const mid = Math.floor((i + j) / 2);
      if (nums[mid] === target) return mid;

      if (target < nums[mid]) {
          j = mid - 1;
      } else {
          i = mid + 1;
      }
  }

  return i;
};

// https://leetcode.com/problems/search-insert-position
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] === val && nums[j] !== val) {
      nums[i] = nums[j];
      nums[j] = null;
      i++;
      j--;
    } else if (nums[i] !== val) {
      i++;
      continue;
    } else if (nums[j] === val) {
      nums[j] = null;
      j--;
    }
  }

  return j + 1;
};

// https://leetcode.com/problems/remove-element?envType=study-plan-v2&envId=top-interview-150

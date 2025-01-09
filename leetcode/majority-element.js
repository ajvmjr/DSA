/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1 - Time O(n) - Space O(n)

var majorityElement = function (nums) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hashMap.hasOwnProperty(nums[i])) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]] += 1;
    }
  }

  let maxValue = 0;
  let maxKey = null;
  for (let key in hashMap) {
    if (hashMap[key] > maxValue) {
      maxValue = hashMap[key];
      maxKey = key;
    }
  }

  return +maxKey;
};

// Solution 2 - Time O(n) - Space O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  let majority;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      majority = num;
    }

    if (num === majority) {
      count++;
    } else {
      count--;
    }
  }

  return majority;
};

// https://leetcode.com/problems/majority-element

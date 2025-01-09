/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1

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

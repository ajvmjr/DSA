/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    const calc = target - nums[i];

    if (cache.has(calc)) {
      return [i, cache.get(calc)]        
    }
    
    cache.set(nums[i], i);
  }
};

// https://leetcode.com/problems/two-sum
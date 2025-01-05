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

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
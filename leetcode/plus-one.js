/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Time O(n) -> Space O(1)
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};

// https://leetcode.com/problems/plus-one

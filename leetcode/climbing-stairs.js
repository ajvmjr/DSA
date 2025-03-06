/**
 * @param {number} n
 * @return {number}
 */

// Time O(n) - Space O(n)
function climb(n, memo) {
  if (n in memo) return memo[n];

  if (n == 1 || n == 2) {
    memo[n] = n;
    return n;
  }

  memo[n] = climb(n - 1, memo) + climb(n - 2, memo);
  return memo[n];
}

var climbStairs = function (n) {
  const memo = {};
  return climb(n, memo);
};

// https://leetcode.com/problems/climbing-stairs

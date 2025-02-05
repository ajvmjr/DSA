/**
 * @param {number[]} prices
 * @return {number}
 */

// Time O(n) - Space O(1)
var maxProfit = function (prices) {
  let maxValue = 0;
  let minValue = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const calc = prices[i] - minValue;
    if (calc > maxValue && calc > 0) {
      maxValue = calc;
    }

    if (prices[i] < minValue) {
      minValue = prices[i];
    }
  }

  return maxValue;
};

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

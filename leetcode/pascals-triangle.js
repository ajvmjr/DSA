/**
 * @param {number} numRows
 * @return {number[][]}
 */

// Time O(n²) - Space O(n²)
var generate = function (numRows) {
  let result = [[1]];

  for (let i = 1; i < numRows; i++) {
    const lastArray = result[i - 1];
    let current = [1];
    for (let j = 1; j < lastArray.length; j++) {
      current[j] = lastArray[j - 1] + lastArray[j];
    }

    current[current.length] = 1;
    result[i] = current;
  }

  return result;
};

// https://leetcode.com/problems/pascals-triangle

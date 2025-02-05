/**
 * @param {number} rowsIndex
 * @return {number[][]}
 */
var getRow = function (rowsIndex) {
  let result = [[1]];

  for (let i = 1; i < rowsIndex + 1; i++) {
    const lastArray = result[i - 1];
    let current = [1];
    for (let j = 1; j < lastArray.length; j++) {
      current[j] = lastArray[j - 1] + lastArray[j];
    }

    current[current.length] = 1;
    result[i] = current;
  }

  return result[rowsIndex];
};

// https://leetcode.com/problems/pascals-triangle-ii

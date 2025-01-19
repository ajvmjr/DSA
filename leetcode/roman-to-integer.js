/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const hash = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  };

  let tot = 0;

  for (let i = s.length - 1; i >= 0; i--) {
      let current = Number(hash[s[i]]);
      let last = Number(hash[s[i + 1]]);

      if (!current) {
          continue;
      }
      
      if (current < last) {
          tot -= current;
      } else {
          tot += current;
      }
  }

  return tot;
};

// https://leetcode.com/problems/roman-to-integer
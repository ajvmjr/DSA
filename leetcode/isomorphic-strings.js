/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const leftIdxs = {};
  const rightIdxs = {};
  
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in leftIdxs)) {
      leftIdxs[s[i]] = i;
    }

    if (!(t[i] in rightIdxs)) {
      rightIdxs[t[i]] = i;
    }

    if (leftIdxs[s[i]] !== rightIdxs[t[i]]) return false; 
  }

  return true;
};

// https://leetcode.com/problems/isomorphic-strings/description/

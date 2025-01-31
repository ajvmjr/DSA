/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solution 1 - Time O(n) - Space O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  sOccurrences = {};
  tOccurences = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in sOccurrences)) {
      sOccurrences[s[i]] = 1;
    } else {
      sOccurrences[s[i]]++;
    }

    if (!(t[i] in tOccurences)) {
      tOccurences[t[i]] = 1;
    } else {
      tOccurences[t[i]]++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in tOccurences) || !(t[i] in sOccurrences)) {
      return false;
    }

    if (sOccurrences[s[i]] !== tOccurences[s[i]]) {
      return false;
    }
  }

  return true;
};

// Solution 2 - Time O(n) - Space O(n)
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;
  const count = {};

  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
    count[t[i]] = (count[t[i]] || 0) - 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] !== 0) return false;
  }

  return true;
};

// https://leetcode.com/problems/valid-anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
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

/**
 * @param {number} x
 * @return {boolean}
 */

// Solution 1 -> Casts x to string and compares each character
// Time O(n) -> Space O(1)
var isPalindrome = function (x) {
  x = String(x);

  let i = 0;
  let j = x.length - 1;

  while (i <= j) {
    if (x[i] != x[j]) return false;

    i++;
    j--;
  }

  return true;
};

var isPalindrome = function (x) {
  if (x < 0) return false;

  let reversed = 0;
  let temp = x;

  while (temp != 0) {
    const digit = temp % 10;
    reversed = reversed * 10 + digit;

    temp = Math.floor(temp / 10);
  }

  return reversed == x;
};

// https://leetcode.com/problems/palindrome-number

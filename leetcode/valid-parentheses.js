/**
 * @param {string} s
 * @return {boolean}
 */
// Time O(n) - Space O(n)
var isValid = function (s) {
  const stack = [];
  s = s.split("").reverse().join("");

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c == ")" || c == "]" || c == "}") {
      stack.push(c);
      continue;
    }

    const peek = stack[stack.length - 1];

    if (
      (c == "{" && peek != "}") ||
      (c == "(" && peek != ")") ||
      (c == "[" && peek != "]")
    )
      return false;

    stack.pop();
  }

  if (stack.length) return false;

  return true;
};

// Solution 2
// Time O(n) - Space O(n)
var isValid2 = function (s) {
  const stack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };

  for (const c of s) {
    if (c in pairs) {
      if (stack.pop() !== pairs[c]) return false;
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};

// https://leetcode.com/problems/valid-parentheses/

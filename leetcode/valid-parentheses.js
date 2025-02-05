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

// https://leetcode.com/problems/valid-parentheses/

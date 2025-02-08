/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// Time O(n) - Space O(n)
var invertTree = function (root) {
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const current = queue.shift();

    if (!current?.left && !current?.right) continue;

    const temp = current.left;

    if (current?.left) {
      queue.push(current.left);
    }

    if (current?.right) {
      queue.push(current.right);
    }

    current.left = current.right;
    current.right = temp;
  }

  return root;
};

// https://leetcode.com/problems/invert-binary-tree

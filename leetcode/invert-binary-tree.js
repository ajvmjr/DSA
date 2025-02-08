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

// Time O(n) - Space O(h) -> h = tree height -> balanced tree = O(log n) -> skewed tree = O(n)
var invertTree = function (root) {
  if (!root) return root;
  if (!root?.left && !root?.right) return root;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

// https://leetcode.com/problems/invert-binary-tree

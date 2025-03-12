/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// Time O(n) - Space O(n)

var sortedArrayToBST = function (nums) {
  if (!nums.length || !nums) return null;

  return buildBST(nums, 0, nums.length - 1);
};

function buildBST(nums, left, right) {
  if (left > right) return null;

  const mid = Math.floor((left + right) / 2);
  let node = new TreeNode(nums[mid]);

  node.left = buildBST(nums, left, mid - 1);
  node.right = buildBST(nums, mid + 1, right);

  return node;
}

// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree

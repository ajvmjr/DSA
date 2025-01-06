/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;

  for (let z = m + n - 1; z >= 0; z--) {
    if (i < 0) {
      nums1[z] = nums2[j];
      j--;
    } else if (j < 0) break;
    else if (nums1[i] > nums2[j]) {
      nums1[z] = nums1[i--];
    } else {
      nums1[z] = nums2[j--];
    }
  }
};

// https://leetcode.com/problems/merge-sorted-array

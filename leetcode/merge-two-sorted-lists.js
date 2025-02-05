/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// Time O(n + m) - Space O(n + m)
var mergeTwoLists = function (list1, list2) {
  let head = null;

  if (!list1 && list2) {
    head = list2;
    list2 = list2.next;
  }

  if (list1 && !list2) {
    head = list1;
    list1 = list1.next;
  }

  if (list1 && list2) {
    if (list1.val <= list2.val) {
      head = list1;
      list1 = list1.next;
    } else {
      head = list2;
      list2 = list2.next;
    }
  }

  let curr = head;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    curr = curr.next;
  }

  while (list1) {
    curr.next = list1;
    curr = curr.next;
    list1 = list1.next;
  }

  while (list2) {
    curr.next = list2;
    curr = curr.next;
    list2 = list2.next;
  }

  return head;
};

// Solution 2 - Time O(n + m) - Space O(n + m)
var mergeTwoLists2 = function (list1, list2) {
  let d = new ListNode();
  let curr = d;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      curr = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      curr = list2;
      list2 = list2.next;
    }
  }

  curr.next = list1 || list2;

  return d.next;
};

// https://leetcode.com/problems/merge-two-sorted-lists

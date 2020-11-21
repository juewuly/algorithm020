/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * 解法一
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
//   let result;
//   let tail;

//   if (!l1)
//     return l2;
//   else if(!l2)
//     return l1;

//   if (l1.val < l2.val) {
//     result = tail = l1;
//     l1 = l1.next;
//   } else {
//     result = tail = l2;
//     l2 = l2.next;
//   }

//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       tail = tail.next = l1;
//       l1 = l1.next;
//     } else {
//       tail = tail.next = l2;
//       l2 = l2.next;
//     }
//   }

//   if (l1)
//     tail.next = l1;
//   else if (l2)
//     tail.next = l2;
  
//   return result;
// };

/**
 * 解法二
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1)
    return l2;
  else if (!l2) 
    return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
// @lc code=end


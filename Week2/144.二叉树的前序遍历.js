/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start

// /**
//  * 第二遍做（2020-11-28）
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var preorderTraversal = function(root) {
//   let result = [];

//   let preorder = function(node) {
//     if (!node)
//       return;
//     result.push(node.val);
//     preorder(node.left);
//     preorder(node.right)
//   }

//   preorder(root);

//   return result;
// }

/**
 * 第二遍做:栈（2020-11-28）
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let result = [];
  let stk = [[0, root]];
  while (stk.length) {
    let [color, node] = stk.pop();
    if (!node)
      continue;
    if (color === 0) {
      stk.push([0, node.right]);
      stk.push([0, node.left]);
      stk.push([1, node]);
    } else
      result.push(node.val);
  }

  return result;
}
// @lc code=end


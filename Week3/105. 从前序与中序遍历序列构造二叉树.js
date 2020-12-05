/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let indexDic = {};
  for (let i = 0; i < inorder.length; i++)
    indexDic[inorder[i]] = i;

  let build = function(preorder, pre_start, pre_end, in_start, in_end) {
    if (pre_start === pre_end)
      return null;

    let rootValue = preorder[pre_start];
    let rootNode = new TreeNode(rootValue);
    const leftCount = indexDic[rootValue] - in_start;

    const leftPreOrderStart = pre_start + 1;
    const leftPreOrderEnd = pre_start + leftCount + 1;
    const leftInOrderStart = in_start;
    const leftInOrderEnd = indexDic[rootValue];
    rootNode.left = build(preorder, leftPreOrderStart, leftPreOrderEnd, leftInOrderStart, leftInOrderEnd);
    
    const rightPreOrderStart = pre_start + leftCount + 1;
    const rightPreOrderEnd = pre_end;
    const rightInOrderStart = indexDic[rootValue] + 1;
    const rightInOrderEnd = in_end;  
    rootNode.right = build(preorder, rightPreOrderStart, rightPreOrderEnd, rightInOrderStart, rightInOrderEnd);
    return rootNode;
  }

  return build(preorder, 0, preorder.length, 0, preorder.length);
};
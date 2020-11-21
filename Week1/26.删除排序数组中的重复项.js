/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// // @lc code=start
// /**
//  * 解法一
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//   let len = nums.length;
//   for (let i = len - 1; i > 0; i--) {
//     if (nums[i] === nums[i-1])
//       nums.splice(i, 1);
//   }
//   return nums.length
// };


// @lc code=start
/**
 * 解法二
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || nums.length === 0) 
    return;

  let i = 0;
  let j = 1;
  let len = nums.length;
  while (j < len) {
    if (nums[i] !== nums[j] && j - i > 0) {
      nums[++i] = nums[j];
    }
    j++;
  }

  return i + 1;
};
// @lc code=end


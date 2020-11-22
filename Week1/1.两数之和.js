/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
// /**
//  * 解法一
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//   let n = nums.length;
//   for (let i = 0; i < n - 1; i++) 
//     for (let j = i + 1; j < n; j++)
//       if (nums[i] + nums[j] === target)
//         return [i, j];
// };

/**
 * 解法二
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let temp = {};
  let result = [];
  nums.some(function(value, index) {
    let need = target - value;
    if (temp[need] !== undefined) {
      result = [temp[need], index];
      return true;
    }
    else
      temp[value] = index;
  })

  return result;
};
// @lc code=end


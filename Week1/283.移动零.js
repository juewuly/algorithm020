/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let record = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0)
      record.push(i);
    else {
      let zeroIndex = record.shift();
      if (zeroIndex !== undefined) {
        nums[zeroIndex] = nums[i];
        nums[i] = 0;
        record.push(i);
      }
    }
  }

  return nums;
};
// @lc code=end


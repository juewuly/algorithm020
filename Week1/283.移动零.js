/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
// /**
//  * 解法一
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//   let record = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0)
//       record.push(i);
//     else {
//       let zeroIndex = record.shift();
//       if (zeroIndex !== undefined) {
//         nums[zeroIndex] = nums[i];
//         nums[i] = 0;
//         record.push(i);
//       }
//     }
//   }

//   return nums;
// };

/**
 * 解法二
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   let j = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0)
//       nums[j++] = nums[i];
//   }

//   for (let i = j; i < nums.length; i++)
//     nums[i] = 0;
  
//   return nums;
// };

/**
 * 解法三
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0;
 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i > j) {
        nums[j] = nums[i];
        nums[i] = 0;
      }
      j++;
    }
  }

  return nums;
};
// @lc code=end


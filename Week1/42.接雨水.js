/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = 0;
  let max_left = 0;
  let max_right = new Array(height.length).fill(0);

  for (let i = height.length - 2; i >=0; i--) {
    max_right[i]  = Math.max(height[i+1], max_right[i+1]);
  }

  for (let i = 1; i < height.length - 1; i++) {
    max_left = Math.max(max_left, height[i-1]);
    let min = Math.min(max_left, max_right[i]);
    if (min > height[i])
      result += min - height[i];
  }

  return result;

};
// @lc code=end


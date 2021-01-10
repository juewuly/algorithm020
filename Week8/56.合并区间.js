/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let k = -1;
  intervals.forEach(item => {
    if (k == -1 || item[0] > result[k][1])
      result[++k] = item;
    else
      result[k][1] = Math.max(result[k][1], item[1])
  })
  return result;
};
// @lc code=end


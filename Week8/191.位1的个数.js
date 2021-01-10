/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let result = 0;
  while (n != 0) {
    result++;
    n &= (n - 1);
  }

  return result;
};
// @lc code=end


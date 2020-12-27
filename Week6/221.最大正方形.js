/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let maxSide = 0;
  let dp = [];

  for (let i = 0; i < row; i++) {
    dp[i] = [];
    for (let j = 0; j < col; j++) {
      dp[i][j] = 0;
      if (matrix[i][j] === '0')
        continue;
      
      if (i === 0 || j === 0)
        dp[i][j] = matrix[i][j];
      else
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
      
      maxSide = Math.max(maxSide, dp[i][j])
    }
  }

  return maxSide * maxSide;
};
// @lc code=end


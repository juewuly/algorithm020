/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let row = grid.length;
  let col = grid[0].length;
  let cur = [grid[0][0]];
  for (let i = 1; i < col; i++)
    cur[i] = cur[i-1] + grid[0][i];

  for (let i = 1; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (j === 0)
        cur[j] += grid[i][j];
      else
        cur[j] = Math.min(cur[j], cur[j-1]) + grid[i][j];
    }
  }

  return cur[col-1];
};
// @lc code=end


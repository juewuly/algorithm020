/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let result = 0;
  let visited = new Set();

  const dfs = (row, col) => {
    let queue = [[row, col]];
    visited.add(`${row},${col}`)

    while (queue.length) {
      const [newRow, newCol] = queue.shift();
      grid[newRow][newCol] = '0'

      // 左边
      if (newCol - 1 >= 0 && grid[newRow][newCol - 1] == '1') {
        if (!visited.has(`${newRow},${newCol-1}`)) {
          queue.push([newRow, newCol - 1])
          visited.add(`${newRow},${newCol-1}`);
        }
      }

      // 右边
      if (newCol + 1 < cols && grid[newRow][newCol + 1] == '1') {
        if (!visited.has(`${newRow},${newCol+1}`)) {
          queue.push([newRow, newCol + 1]);
          visited.add(`${newRow},${newCol+1}`);
        }
      }

      // 上边
      if (newRow - 1 >= 0 && grid[newRow - 1][newCol] == '1') {
        if (!visited.has(`${newRow-1},${newCol}`)) {
          queue.push([newRow - 1, newCol]);
          visited.add(`${newRow-1},${newCol}`);
        }
      }
      
      // 下边
      if (newRow + 1 < rows && grid[newRow + 1][newCol] == '1') {
        if (!visited.has(`${newRow+1},${newCol}`)) {
          queue.push([newRow + 1, newCol]);
          visited.add(`${newRow+1},${newCol}`);
        }
      }
    }
    
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited.has(`${i},${j}`) && grid[i][j] == '1') {
        result++;
        dfs(i, j);
      }
    }
  }

  return result;
};
// @lc code=end


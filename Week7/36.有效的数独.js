/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let rowMap = {};
  let colMap = {};
  let boxMap = {};

  for (let i  = 0; i < 9; i++) {
    rowMap[i] = new Set([]);
    colMap[i] = new Set([]);
    boxMap[i] = new Set([]);
  }

  const getBoxIndex = (row, col) => Math.floor(row/3) * 3 + Math.floor(col / 3);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.')
        continue;
      
      const num = board[i][j];
      const boxIndex = getBoxIndex(i, j);
      if (rowMap[i].has(num) || colMap[j].has(num) || boxMap[boxIndex].has(num))
        return false;
      else {
        rowMap[i].add(num);
        colMap[j].add(num);
        boxMap[boxIndex].add(num);
      }
    }
  }

  return true;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board || !board.length)
    return;

  const rows = board.length;
  const cols = board[0].length;
  let unionFind = new UnionFind(rows * cols + 1);
  let dummyNode = rows * cols;
  const node = (i, j) => i * cols + j;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
          unionFind.union(node(i, j), dummyNode);
        } else {
          if (i > 0 && board[i-1][j] === 'O')
            unionFind.union(node(i, j), node(i-1, j));
          if (i < rows - 1 && board[i+1][j] === 'O')
            unionFind.union(node(i, j), node(i+1, j));
          if (j > 0 && board[i][j-1] === 'O')
            unionFind.union(node(i, j), node(i, j-1));
          if (j < cols - 1 && board[i][j+1] === 'O')
            unionFind.union(node(i, j), node(i, j+1));
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (unionFind.isConnected(node(i, j), dummyNode))
        board[i][j] = 'O';
      else
        board[i][j] = 'X';
    }
  }

};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.count = n;
    for (let i = 0; i < n; i++)
      this.parent[i] = i;
  }

  find(p) {
    // let root = p;
    // while (this.parent[root] !== root) {
    //   root = this.parent[root];
    // }

    // while (this.parent[p] !== p) {
    //   let x = p;
    //   p = this.parent[p];
    //   this.parent[x] = root;
    // }

    // return root;

    while (this.parent[p] !== p) {
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }
    return p;
  }

  union(m, n) {
    let rootM = this.find(m);
    let rootN = this.find(n);
    if (rootM === rootN)
      return;

    this.parent[rootM] = rootN;
    this.count--;
  }

  isConnected(m, n) {
    return this.find(m) === this.find(n);
  }
}

// @lc code=end




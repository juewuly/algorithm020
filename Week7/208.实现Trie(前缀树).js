/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

class Trie {
  constructor() {
    this.root = {};
    this.endChar = '$';
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      node[ch] = node[ch] || {};
      node = node[ch];
    }
    node[this.endChar] = this.endChar
  }

  search(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch])
        return false;
      node = node[ch];
    }

    return node[this.endChar] === this.endChar;
  }

  startsWith(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch])
        return false;
      node = node[ch];
    }

    return true;
  }
}



/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end


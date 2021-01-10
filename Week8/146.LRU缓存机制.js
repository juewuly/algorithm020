/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cash = new Map();
  }

  get(key) {
    if (!this.cash.has(key))
      return -1;
    
    let value = this.cash.get(key);
    this.cash.delete(key);
    this.cash.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cash.has(key)) {
      this.cash.delete(key);
    } else {
      if (this.cash.size >= this.capacity) {
        let firstKey = this.cash.keys().next().value;
        this.cash.delete(firstKey);
      }
    }

    this.cash.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end


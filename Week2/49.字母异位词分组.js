/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let temp = {};
  strs.forEach(item => {
    let key = item.split('').sort();
    if (temp[key] === undefined)
      temp[key] = [item];
    else
      temp[key].push(item);
  })

  return Object.values(temp)
};

// @lc code=end


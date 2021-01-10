/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let result = [];
  const maxNum = Math.max(...arr1);
  let countArr = new Array(maxNum + 1).fill(0);
  arr1.forEach(item => countArr[item]++);
  arr2.forEach(item => {
    let count = countArr[item];
    for (let i = 0; i < count; i++)
      result.push(item);
    countArr[item] = 0;
  });

  for (let i = 0; i <= maxNum; i++) {
    let count = countArr[i];
    for (let j = 0; j < count; j++)
      result.push(i);
  }

  return result;
};
// @lc code=end


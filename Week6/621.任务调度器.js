/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let len = tasks.length;
  let countMap = {};
  tasks.forEach(item => {
    countMap[item] ? countMap[item]++ : countMap[item] = 1;
  });

  let countArr = Object.values(countMap).sort((a, b) => b - a);
  const maxCount = countArr[0];
  const maxEqua = countArr.filter(item => item === maxCount).length;

  const min = (maxCount - 1) * (n + 1) + maxEqua;
  return Math.max(min, len);
};
// @lc code=end


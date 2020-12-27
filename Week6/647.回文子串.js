/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var countSubstrings = function(s) {
//   let sArr = s.split('');
//   let len = s.length;
//   let dp = [];
//   sArr.forEach(() => dp.push(new Array(len).fill(false)))
//   let count = 0;

//   for (let j = 0; j < len; j++) {
//     for (let i = 0; i <= j; i++) {
//       if (sArr[i] === sArr[j] && (j - i < 2 || dp[i+1][j-1])) {
//         dp[i][j] = true;
//         count++;
//       }
//     }
//   }

//   return count;
// };

/**
 * 解法二
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let sArr = s.split('');
  let len = s.length;
  let count = 0;

  for (let i = 0; i < 2 * len - 1; i++) {
    let left = Math.floor(i/2);
    let right = left + i % 2;
    while (left >= 0 && right < len && sArr[left] === sArr[right]) {
      left--;
      right++;
      count++
    }
  }
  
  return count;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length;
  let dp = new Array(len);
  for (let i = 0; i < len; i++)
    dp[i] = [];
  
  let maxLen = 1;
  let startIndex = 0;
  let str = s.split('');

  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (str[i] !== str[j])
        dp[i][j] = false;
      else {
        if (j - i < 3)
          dp[i][j] = true;
        else
          dp[i][j] = dp[i+1][j-1];
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        startIndex = i;
      }
    }
  }

  return s.slice(startIndex, startIndex + maxLen)
};
// @lc code=end


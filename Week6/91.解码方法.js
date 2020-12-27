/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let sArr = s.split('');
  if (sArr[0] === '0')
    return 0;
  
  let cur = pre = 1;
  for (let i = 1; i < sArr.length; i++) {
    const oldCur = cur;
    if (sArr[i] === '0') {
      if (sArr[i-1] === '1' || sArr[i-1] === '2')
        cur = pre;
      else
       return 0;
    } else {
      if (sArr[i-1] === '1' || (sArr[i-1] === '2' && Number(sArr[i]) >= 1 && Number(sArr[i]) <= 6))
        cur = cur + pre;
    }

    pre = oldCur;
  }

  return cur;
};
// @lc code=end


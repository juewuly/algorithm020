/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * 解法一
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//   let carry = 1;
//   let temp;
//   for (let i = digits.length -1; i >= 0; i--) {
//     temp = digits[i] + carry;
//     if (temp === 10) {
//       carry = 1;
//       digits[i] = 0;
//     } else {
//       carry = 0;
//       digits[i] = temp;
//     }
//   }

//   if (carry === 1)
//     digits.unshift(1);

//   return digits;
// };

/**
 * 解法二
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length -1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10;
    if (digits[i] !== 0)
      return digits;
  }

  digits.unshift(1);

  return digits;
};
// @lc code=end


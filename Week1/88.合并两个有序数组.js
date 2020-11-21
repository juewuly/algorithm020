/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
// /**
//  * 解法一
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {
//   if (m === 0)
//     return nums1.splice(0, n, ...nums2);
//   else if (n === 0)
//     return nums1;
  
//   let arr1 = nums1.splice(0, m);
//   let i = j = 0;

//   while (i < m && j < n) {
//     if (arr1[i] < nums2[j]) {
//       nums1[i+j] = arr1[i];
//       i++;
//     } else {
//       nums1[i+j] = nums2[j];
//       j++;
//     }
//   }

//   let index = i + j;
//   if (i < m)
//     nums1.splice(index, m-i, ...arr1.slice(i));
//   else if ( j < n)
//     nums1.splice(index, n-j, ...nums2.slice(j))

//   return nums1;
// };

/**
 * 解法二
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let tail = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2])
      nums1[tail--] = nums1[p1--];
    else
      nums1[tail--] = nums2[p2--];
  }

  let rest = p2 + 1;
  nums1.splice(0, rest, ...nums2.slice(0, rest));
  
  return nums2;
};
// @lc code=end


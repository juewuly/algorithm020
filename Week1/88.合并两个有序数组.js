/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (m === 0)
    return nums1.splice(0, n, ...nums2);
  else if (n === 0)
    return nums1;
  
  let arr1 = nums1.splice(0, m);
  let i = j = 0;

  while (i < m && j < n) {
    if (arr1[i] < nums2[j]) {
      nums1[i+j] = arr1[i];
      i++;
    } else {
      nums1[i+j] = nums2[j];
      j++;
    }
  }

  let index = i + j;
  if (i < m)
    nums1.splice(index, m-i, ...arr1.slice(i));
  else if ( j < n)
    nums1.splice(index, n-j, ...nums2.slice(j))

  return nums1;
};
// @lc code=end


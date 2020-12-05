/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [];
  let build = function(level, item, rest) {
    if (level === nums.length) {
      result.push(item);
      return;
    }

    for (let i = 0; i < rest.length; i++) {
      let newRest = rest.slice();
      newRest.splice(i, 1)
      build(level + 1, [...item, rest[i]], newRest);
    }
  }

  build(0, [], nums)
  return result;
};
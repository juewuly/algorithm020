/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let uglyArr = [1];
  let i2 = i3 = i5 = 0;
  for (let i = 1; i < 1690; i++) {
      let [a, b, c] = [uglyArr[i2]*2, uglyArr[i3]*3, uglyArr[i5]*5];
      let ugly = Math.min(a,b,c);
      uglyArr[i] = ugly;

      ugly === a ? i2++ : null;
      ugly === b ? i3++ : null;
      ugly === c ? i5++ : null;
  }
  return uglyArr[n-1]
};
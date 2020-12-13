/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let queue = [beginWord];
    let visited = new Set([beginWord]);
    let result = 0;
    let wordMap = {};
    wordList.forEach(item => wordMap[item] = true);

    const check = ({ current, endWord, queue, visited, wordMap }) => {
      let currentArr = current.split('');
      for (let i = 0; i < currentArr.length; i++) {
        const oldChar = currentArr[i];
        for (let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
          const char = String.fromCharCode(j);
          if (char == oldChar)
            continue;

          currentArr[i] = char;
          const stringItem = currentArr.join('');
          if (wordMap[stringItem]) {
            if (stringItem === endWord)
              return true;
            else if (!visited.has(stringItem)) {
              queue.push(stringItem);
              visited.add(stringItem);
            }
          }
        }
        currentArr[i] = oldChar;
      }
    }

    while (queue.length) {
      const len = queue.length;
      result++;
      for (let i = 0; i < len; i++) {
        const current = queue.shift();
        if (check({ current, endWord, queue, visited, wordMap })) {
          return result + 1;
        }
      }
    }

    return 0;
};
// @lc code=end


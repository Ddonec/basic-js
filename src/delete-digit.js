const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = Array.from(String(n), Number);
  let value = 0;

  for (let i = 0; i < arr.length; i++) {
      const newN = Number([...arr.slice(0, i), ...arr.slice(i + 1)].join(''));
      value = Math.max(value, newN);
  }

  return value;
}

module.exports = {
  deleteDigit
};

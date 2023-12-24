const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
   let ob1 = {};
   let ob2 = {};
   let count = 0;

   for (let char of s1) {
      ob1[char] = (ob1[char] || 0) + 1;
   }

   for (let char of s2) {
      ob2[char] = (ob2[char] || 0) + 1;
   }

   const keys = Object.keys(ob1);
   for (let i = 0; i < keys.length; i++) {
      const char = keys[i];
      count += Math.min(ob1[char], ob2[char] || 0);
   }

   return count;
}

module.exports = {
   getCommonCharacterCount,
};

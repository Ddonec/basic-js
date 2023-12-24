const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
   const uniqName = new Set();
   const count = new Map();

   return names.map((name) => {
      if (!uniqName.has(name)) {
         uniqName.add(name);
         return name;
      } else {
         const elseCount = count.has(name) ? count.get(name) : 1;
         const newName = `${name}(${elseCount})`;
         count.set(name, elseCount + 1);
         uniqName.add(newName);
         return newName;
      }
   });
}

module.exports = {
   renameFiles,
};

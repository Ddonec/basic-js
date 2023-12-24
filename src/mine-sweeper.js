const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  function isValid(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  }
  for (let i = 0; i < rows; i++) {
    for (let I = 0; I < cols; I++) {
      for (let ii = -1; ii <= 1; ii++) {
        for (let II = -1; II <= 1; II++) {
          if (ii === 0 && II === 0) continue;
          const newLine = i + ii;
          const newColunm = I + II;

          if (isValid(newLine, newColunm) && matrix[newLine][newColunm]) {
            result[i][I]++;
          }
        }
      }
    }
  }

  return result;
}


module.exports = {
  minesweeper
};

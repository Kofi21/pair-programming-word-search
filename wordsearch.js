const transpose = function (matrix) {
  // result
  let result = [];
  let columnNumber = matrix[0].length;

  for (let j = 0; j < columnNumber; j++) {
    let newRow = [];
    for (let i = 0; i < matrix.length; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
};

const wordSearch = (letters, word) => {
  if (letters.length < 1) {
    return undefined;
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  tempTranspose = transpose(letters);
  const verticalJoin = tempTranspose.map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;

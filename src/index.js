
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
}

for (let i = 0; i < matrix.length; i++) {
    if ((i + 1) % 2 === 0) {
        matrix[i].reverse();
    }
}

return matrix.reduce((prev, next) => prev.concat(next), []);
};
function getNeighbors(row, col, matrix) {
  // Your code here
  let neigbors = [];
  let top = [row - 1, col];
  let topRight = [row - 1, col + 1];
  let right = [row, col + 1];
  let bottomRight = [row + 1, col + 1];
  let bottom = [row + 1, col];
  let bottomLeft = [row + 1, col - 1];
  let left = [row, col - 1];
  let topLeft = [row - 1, col - 1];

  // Check top
  if (top[0] >= 0 && matrix[top[0]][top[1]] === 1) {
    neigbors.push(top);
  }
  // Check top right
  if (
    topRight[0] >= 0 &&
    topRight[1] < matrix[0].length &&
    matrix[topRight[0]][topRight[1]] === 1
  ) {
    neigbors.push(topRight);
  }
  // Check right
  if (right[1] < matrix[0].length && matrix[right[0]][right[1]] === 1) {
    neigbors.push(right);
  }
  // Check bottom right
  if (
    bottomRight[0] < matrix.length &&
    bottomRight[1] < matrix[0].length &&
    matrix[bottomRight[0]][bottomRight[1]] === 1
  ) {
    neigbors.push(bottomRight);
  }
  // Check bottom
  if (bottom[0] < matrix.length && matrix[bottom[0]][bottom[1]] === 1) {
    neigbors.push(bottom);
  }
  // Check bottom left
  if (
    bottomLeft[0] < matrix.length &&
    bottomLeft[1] >= 0 &&
    matrix[bottomLeft[0]][bottomLeft[1]] === 1
  ) {
    neigbors.push(bottomLeft);
  }
  // Check left
  if (left[1] >= 0 && matrix[left[0]][left[1]] === 1) {
    neigbors.push(left);
  }
  // Check top left
  if (
    topLeft[0] >= 0 &&
    topLeft[1] >= 0 &&
    matrix[topLeft[0]][topLeft[1]] === 1
  ) {
    neigbors.push(topLeft);
  }

  // Return neighbors
  return neigbors;
}

function countIslands(matrix) {
  // Your code here

  // Create a visited set to store visited nodes
  let visited = new Set();

  // Initialize count to 0
  let count = 0;
  let row = matrix.length;
  let col = matrix[0].length;

  // Iterate through all indices in matrix
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let item = matrix[i][j];
      let index = [i, j];

      // If an index contains a 1 and has not been visited,
      if (item === 1 && !visited.has(index.toString())) {
        // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        count++;

        // Initialize a stack with current index
        let stack = [[i, j]];

        // Add stringified version of current index to the visited set
        visited.add(index.toString());

        // While stack contains elements
        while (stack.length > 0) {
          // Pop element from stack
          let node = stack.pop();

          // Get valid neighbors of current element
          let neigbors = getNeighbors(node[0], node[1], matrix);

          // Iterate over neigbors
          for (let neighbor of neigbors) {
            // If neighbor has not been visited
            if (!visited.has(neighbor.toString())) {
              // Add neighbor to stack
              stack.push(neighbor);

              // Mark neighbor as visited
              visited.add(neighbor.toString());
            }
          }
        }
      }
    }
  }
  // Return island count
  return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];

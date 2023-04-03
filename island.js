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
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
  // If an index contains a 1 and has not been visited,
  // increment island count and start traversing neighbors
  // DO THE THING (increment island count by 1)
  // Initialize a stack with current index
  // Add stringified version of current index to the visited set
  // While stack contains elements
  // Pop element from stack
  // Get valid neighbors of current element
  // Iterate over neigbors
  // If neighbor has not been visited
  // Add neighbor to stack
  // Mark neighbor as visited
  // Return island count
  // Your code here
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

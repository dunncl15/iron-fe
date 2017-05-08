//closest neighbor
// Given a number n, find the largest integer below n and the smallest integer above n that are divisible by a, b, and c.
//n = 20, a = 2, b = 3, c = 4, the output should be [12, 24]

function closestNeighbor(n, a, b, c) {
  let largest = [];
  let smallest = [];
  while (!largest.length) {
    n--;
    if (n % a === 0 && n % b === 0 && n % c === 0) {
      largest.push(n)
    }
  }
  while (!smallest.length) {
    n++;
    if (n % a === 0 && n % b === 0 && n % c === 0) {
      smallest.push(n)
    }
  }
  return largest.concat(smallest);
}

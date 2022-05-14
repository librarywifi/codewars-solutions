// Sum of odd numbers (5/14/22) - 7kyu

// PREP
// P: integer
// R: integer
// E: rowSumOddNumbers(3); returns 8

function rowSumOddNumbers(n) {
  // P: return the sum of the numbers in the nth row
  // the numbers of each row seem to be the cube root of the nth number
  return n * n * n;
}

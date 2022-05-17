function dontGiveMeFive(start, end) {
  // P: Two integers, the first number is always less than the second
  // R: Return a count of all the numbers between the inputs, including the inputs, except for the numbers including a 5
  // E: dontGiveMeFive(1,6) returns 5 because it counts 1,2,3,4,6.
  // P:
  // Create a counter that accounts for numbers that are not a 5 between the start and end numbers
  // Create a loop that starts at the first number and ends at the second
  // If the i does not include a 5, increase a counter by 1
  // Return the counter
  let nonFives = 0;
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes(5)) {
      nonFives += 1;
    }
  }
  return nonFives;
}

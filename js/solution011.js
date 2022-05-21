// Can we divide it?

function isDivideBy(number, a, b) {
  // P: Three integers
  // R: boolean
  // E: isDivideBy(-12, 2, -6) returns true
  // P:
  // Check if number is divisible by a and by b
  // if so, return true, if not, return false

  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false;
  }
}

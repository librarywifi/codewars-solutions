// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  let newArray = numbers.sort(function (a, b) {
    return a - b;
  });
  let sumOfLows = newArray[0] + newArray[1];
  return sumOfLows;
}

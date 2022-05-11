// Highest and Lowest (5/11/22)

function highAndLow(numbers) {
  let newArr = numbers.split(" ").map((i) => Number(i));
  let low = newArr[0];
  let high = newArr[0];
  for (let i = 0; i < newArr.length; i++) {
    if (high < newArr[i]) {
      high = newArr[i];
    }
    if (low > newArr[i]) {
      low = newArr[i];
    }
  }
  return `${high} ${low}`;
}

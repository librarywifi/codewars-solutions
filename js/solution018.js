// If you can't sleep, just count sheep!!
var countSheep = function (num) {
  let x = "";
  for (let i = 1; i <= num; i++) {
    x += `${i} sheep...`;
  }
  return x;
};

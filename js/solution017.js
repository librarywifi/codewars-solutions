var isSquare = function (n) {
  let x = Math.sqrt(n);

  if (x % 1 != 0) {
    return false;
  } else {
    return true;
  }
};

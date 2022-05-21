// Area or Perimeter

const areaOrPerimeter = function (l, w) {
  // P: two integers
  // R: an integer representing its area or its perimeter depending on if it is a square or rectangle
  // E: areaOrPerimeter(2, 2) returns 4; areaOrPerimer(3, 5) returns 16
  // P:
  // determine if polygon is a square or circle
  // calculate area or perimeter based on polygon
  // return area or perimeter

  if (l === w) {
    return l * w;
  } else {
    return l + l + w + w;
  }
};

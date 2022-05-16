function hero(bullets, dragons) {
  // P: two integers
  // R: boolean, true if the hero will survive
  // E: Each dragon requires two bullets. If there are not enough bullets for each dragon, the hero will die
  // hero(4, 2) returns true, hero(4, 2) returns false
  // P: Multiply dragons by 2 and return true if bullets are equal to or greater than this value

  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}

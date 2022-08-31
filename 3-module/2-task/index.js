function filterRange(arr, a, b) {
  function intervalOfNum(x) {
    if (x >= a && x <= b) return true;
    return false;
  }
  return arr.filter(intervalOfNum);
}

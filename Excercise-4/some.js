function some(arr = [], predicate) {
  for (const idx in arr) {
    if (!predicate(arr[idx], idx)) {
      return false;
    }
  }
  return true;
}

function reverseArrayInPlace(arr) {
  for (let i = 0, len = arr.length; i < len / 2; i++) {
    [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
  }
  return arr;
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6]);
reverseArrayInPlace([1, 2, 3, 4, 5]);

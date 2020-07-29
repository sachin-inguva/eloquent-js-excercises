function arrayToList(arr) {
  let res = null;
  while (arr.length) {
    res = { value: arr.pop(), rest: res };
  }
  return res;
}

arrayToList([1, 2, 3, 4]);

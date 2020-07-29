function everyWithFilter(arr, predicate) {
  return arr.filter(predicate).length === arr.length;
}

function everyWithSome(arr, predicate) {
  return !arr.some((v, i) => !predicate(v, i));
}

function everyWithLoop(arr, predicate) {
  const res = [];
  for (const idx in arr) {
    const ans = predicate(arr[idx], idx);
    if (ans) res.push(ans);
  }
  return res.length === arr.length;
}

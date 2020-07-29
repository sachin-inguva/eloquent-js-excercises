const sum = (arr) => arr.reduce((a, b) => a + b, 0);

const range = (from, to, step = 1) => {
  let arr = [];
  for (let i = from; i <= to; i += step) arr.push(i);
  return arr;
};

sum(range(1, 10));

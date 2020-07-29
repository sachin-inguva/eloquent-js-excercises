const minimun = (...args) =>
  args.reduce((min, val) => (val < min ? val : min), Number.MAX_VALUE);

minimun(1, 2, 3, 4, 5);

function listToArray(list) {
  let arr = [];
  while (list) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

listToArray(list);

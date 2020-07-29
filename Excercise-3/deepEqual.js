const isObject = (obj) => typeof obj === "object" && obj !== null;
const isArray = (arr) => Array.isArray(arr);
const keys = (obj) => Object.keys(obj);
const values = (obj) => Object.values(obj);

function areArraysDeepEqual(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every((a, i) => {
      if (isArray(a) && isArray(arr2[i])) {
        return areArraysDeepEqual(a, arr2[i]);
      }
      return a === arr2[i];
    });
  }
  return false;
}

// function areArraysDeepEqualLazy(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     return !arr1.some((a, i) => {
//       if (isArray(a) && isArray(arr2[i])) {
//         return areArraysDeepEqual(a, arr2[i]);
//       }
//       return a !== arr2[i];
//     });
//   }
//   return false;
// }

function areObjectKeysEqual(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every((a, i) => a === arr2[i]);
  }
  return false;
}

function deepEqual(obj1, obj2) {
  if (isArray(obj1) && isArray(obj2)) {
    debugger
    if (obj1.length === obj2.length) {
      debugger
      // return obj1.forEach((v,idx)=>{
      //  return deepEqual(obj1[idx], obj2[idx])
      // })
      for (idx in obj1) {
        debugger
          deepEqual(obj1[idx], obj2[idx]);
      }
      return true
    }
    return false;
  }
  if (isObject(obj1) && isObject(obj2)) {
    if (areObjectKeysEqual(keys(obj1), keys(obj2))) {
      for (key of keys(obj1)) {
        deepEqual(obj1[key], obj2[key]);
      }
    }
    return false;
  }
  debugger
  return obj1 === obj2;
}

function testAreArraysDeepEqual() {
  let cases = [
    [[1, 2, 3], [1, 2, 3], true],
    [[1, 2, 3], [1, 2, 4], false],
    [[1, 2, [1, 2, 3, [4, 5]]], [1, 2, [1, 2, 3, [4, 5]]], true],
    [[1, 2, [1, 2, 3, [4, 5, 7]]], [1, 2, [1, 2, 3, [4, 5, 6]]], false],
    [[1, 2, [1, 2, 3, [4, 5]]], [1, 2, [1, 2, 3, [4, 5, 6]]], false],
    [[1, 3, [1, 2, 3, [4, 5]]], [1, 2, [1, 2, 3, [4, 5, 6]]], false],
  ];
  console.log(
    "result: ",
    cases.every(([a1, a2, res]) => deepEqual(a1, a2) === res)
  );
}

function testAreObjectsEqual() {
  let cases = [
    [
      { a: { b: { c: { d: { e: "f" } } } } },
      { a: { b: { c: { d: { e: "f" } } } } },
      true,
    ][
      ({ a: { b: { c: { d: { e: "f" } } } } },
      { a: { b: { c: { d: { e: "a" } } } } },
      false)
    ],
  ];
  console.log(
    "result: ",
    cases.every(([a1, a2, res]) => deepEqual(a1, a2) === res)
  );
}

testAreArraysDeepEqual();
//testAreObjectsEqual();

function countBs(str) {
  let bCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") bCount += 1;
  }
  return bCount;
}

const countBs = (str) => [...str].filter((v) => v === "B").length;

countBs("abBcBdbeBfbgB");

function evenOdd(num) {
  if (num === 0) {
    return "Even!";
  }
  if (num === 1) {
    return "Odd!";
  }
  return evenOdd(Math.abs(num) - 2);
}

evenOdd(75);
evenOdd(50);
evenOdd(-75);
evenOdd(-50);

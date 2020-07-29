function chessBoard(length = 8) {
  return Array.from({ length })
    .fill("#")
    .map((v) => v.repeat(length))
    .join("\n");
}

chessBoard();

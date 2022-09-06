function makeDiagonalRed(table) {
  const arrCells = [];
  for (let row of table.rows) {
    for (let cell of row.cells) {
      arrCells.push(cell);
    }
  }
  const rowLength = Math.sqrt(arrCells.length);
  for (let i = 0; i < arrCells.length; i += rowLength + 1) {
    arrCells[i].style.backgroundColor = "red";
  }
}

type GridProps = {
  width: number;
  length: number;
};

class Grid implements GridProps {
  width: number;
  length: number;
  cells: string[];

  constructor({ width, length }: GridProps) {
    this.width = width;
    this.length = length;
    this.cells = Array(width * length).fill("#FFFFFF");
  }

  handleCellClick(index: number, selectedColor: string) {
    this.cells[index] = selectedColor;
  }

  getCells() {
    return this.cells;
  }
}

export default Grid;

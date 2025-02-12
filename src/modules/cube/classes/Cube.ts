import CubeProps from "../types/ICube";

export class Cube implements CubeProps {
  color: string;
  length: number;
  width: number;
  cost: number;
  constructor({ color, length, width, cost }: CubeProps) {
    this.color = color;
    this.length = length;
    this.width = width;
    this.cost = cost;
  }
  buy() {
    console.log("Working...");
  }
  placeInGrid() {
    console.log("Placing...");
  }
}

export default Cube;

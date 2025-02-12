import { Days, JobsProps } from "../types/lJobsProps";
import Cube from "./Cube";

class Jobs implements JobsProps {
  name: string;
  salary: number;
  workDay: Days;
  seconds: number;
  cube: Cube;
  constructor({ salary, workDay, cube, name, seconds }: JobsProps) {
    this.salary = salary;
    this.workDay = workDay;
    this.cube = cube;
    this.name = name;
    this.seconds = seconds;
  }
  detailsJob() {
    return {
      name: this.name,
      salary: this.salary,
      workDay: this.workDay,
      cube: this.cube,
      seconds: this.seconds,
    };
  }
  work() {
    return "Working...";
  }
  rest() {
    return "Rest...";
  }
}

export default Jobs;

import Cube from "../classes/Cube";
import CubeProps from "./ICube";

type Days = {
  Sunday: boolean;
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thursday: boolean;
  Friday: boolean;
  Saturday: boolean;
};
type JobsProps = {
  name: string;
  salary: number;
  workDay: Days;
  cube: Cube;
  seconds:number
};
type JobsCreate = Omit<JobsProps, "cube"> & CubeProps;
export type { JobsProps, Days, JobsCreate };

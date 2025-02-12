import { JobsCreate } from "../types/lJobsProps";

const woodcutter: JobsCreate = {
  name: "woodcutter",
  salary: 100,
  workDay: {
    Sunday: true,
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: true,
  },
  color: "black",
  width: 100,
  length: 100,
  cost: 50,
  seconds: 10,
};

const scientist: JobsCreate = {
  name: "Scientists",
  salary: 1000,
  workDay: {
    Sunday: true,
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: true,
  },
  color: "green",
  width: 100,
  length: 100,
  cost: 50,
  seconds: 2,
};
export default { woodcutter, scientist };

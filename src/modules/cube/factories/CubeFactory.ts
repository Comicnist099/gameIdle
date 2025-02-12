import Cube from "../classes/Cube";
import Jobs from "../classes/Jobs";
import { JobsCreate } from "../types/lJobsProps";
import jobsList from "../jobs/jobsList";

class cubeFactory {
  static jobList: Jobs[] = [];

  static createCube(typeJob: JobsCreate) {
    const cube = new Cube({
      color: typeJob.color,
      width: typeJob.width,
      length: typeJob.length,
      cost: typeJob.cost,
    });

    const job = new Jobs({
      name: typeJob.name,
      salary: typeJob.salary,
      workDay: typeJob.workDay,
      seconds: typeJob.seconds,
      cube: cube,
    });

    cubeFactory.jobList.push(job);
  }

  static setJobs() {
    if (this.jobList.length === 0) {
      this.createCube(jobsList.woodcutter);
      this.createCube(jobsList.scientist);
    }
  }

  static getJobs(): Jobs[] {
    return cubeFactory.jobList;
  }
}

cubeFactory.setJobs();

export default cubeFactory;

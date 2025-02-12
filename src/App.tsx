import "./App.css";
import CubeFactory from "./modules/cube/factories/CubeFactory";
import cubeFactory from "./modules/cube/factories/CubeFactory";
import woodcutter from "./modules/cube/jobs/jobsList";
import GridComponent from "./modules/grid/components/GridComponent";

// const factory1 = new CubeFactory();
// const job1 = factory1.createCube(woodcutter);
function App() {
  return (
    <>
      <GridComponent />
    </>
  );
}

export default App;

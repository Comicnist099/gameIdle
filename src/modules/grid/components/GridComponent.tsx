import React, { useState, useEffect, useCallback } from "react";
import cubeFactory from "../../cube/factories/CubeFactory";
import Jobs from "../../cube/classes/Jobs";
import ColorPalette from "./subComponents/colorPalette";
import GridDisplay from "./subComponents/gridDisplay";
import TotalSalary from "./subComponents/totalSalary";

const GRID_SIZE = 10;

const GridComponent: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF");

  const jobs: Jobs[] = cubeFactory.getJobs();

  const [cells, setCells] = useState<string[]>(
    Array(GRID_SIZE * GRID_SIZE).fill("#FFFFFF")
  );

  const [totalSalary, setTotalSalary] = useState<number>(0);

  // Función para cambiar el color de una celda al hacer clic
  const handleCellClick = useCallback(
    (index: number) => {
      const newCells = [...cells];
      newCells[index] = selectedColor;
      setCells(newCells);
    },
    [cells, selectedColor]
  );

  // intervalos separados para cada job
  useEffect(() => {
    const intervalIds = jobs.map((job) => {
      return setInterval(() => {
        const count = cells.filter((color) => color === job.cube.color).length;
        setTotalSalary((prevSalary) => prevSalary + count * job.salary);
      }, job.seconds * 1000); 
    });

    // limpiar los intervalos al desmontar o cuando cambien las dependencias
    return () => {
      intervalIds.forEach((id) => clearInterval(id));
    };
  }, [cells, jobs]);

  return (
    <div className="flex">
      <ColorPalette jobs={jobs} setSelectedColor={setSelectedColor} />
      <GridDisplay cells={cells} handleCellClick={handleCellClick} />
      <TotalSalary totalSalary={totalSalary} />
    </div>
  );
};

export default GridComponent;

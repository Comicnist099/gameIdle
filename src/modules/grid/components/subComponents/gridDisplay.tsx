interface GridDisplayProps {
  cells: string[];
  handleCellClick: (index: number) => void;
}

const GridDisplay: React.FC<GridDisplayProps> = ({
  cells,
  handleCellClick,
}) => {
  return (
    <div className="flex justify-center items-center w-[90vmin] h-[90vmin]">
      <div
        className="grid gap-0"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(10, 1fr)`,
          gridTemplateRows: `repeat(10, 1fr)`,
          width: "400px",
          height: "400px",
        }}
      >
        {cells.map((color, index) => (
          <div
            key={index}
            className="border border-gray-200 aspect-square"
            style={{ backgroundColor: color }}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GridDisplay;

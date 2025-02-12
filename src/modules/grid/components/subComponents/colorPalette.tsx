import Jobs from "../../../cube/classes/Jobs";

interface ColorPaletteProps {
  jobs: Jobs[];
  setSelectedColor: (color: string) => void;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({
  jobs,
  setSelectedColor,
}) => {
  return (
    <div className="w-50 h-screen flex flex-col items-start bg-gray-200 p-4">
      <h2 className="text-xl mb-4">Jobs</h2>
      {jobs.length > 0 ? (
        <div className="w-full grid grid-cols-1 gap-4">
          {jobs.map((item: Jobs) => (
            <div
              key={item.cube.color}
              className="p-4 bg-white shadow-md rounded-lg flex items-center cursor-pointer hover:bg-amber-200 transition duration-300"
              onClick={() => setSelectedColor(item.cube.color)}
            >
              <div
                className="w-12 h-12 mr-4"
                style={{ backgroundColor: item.cube.color }}
              />
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>No colors available</p>
      )}
    </div>
  );
};

export default ColorPalette;

interface TotalSalaryProps {
  totalSalary: number;
}

const TotalSalary: React.FC<TotalSalaryProps> = ({ totalSalary }) => {
  return (
    <div className="w-40 h-screen flex flex-col justify-center items-center bg-gray-300 p-4">
      <h2 className="text-xl mb-4">Total Salary</h2>
      <div className="text-lg mb-2">${totalSalary}</div>
    </div>
  );
};

export default TotalSalary;

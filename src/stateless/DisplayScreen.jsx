import { useCalculator } from "../context/CalculatorContext";

const DisplayScreen = () => {
  const { value } = useCalculator();
  return (
    <div className="flex justify-end items-end w-full h-20 border-b flex-wrap">
      <h1 className={`text-xl mb-6 `}>{value}</h1>
    </div>
  );
};

export default DisplayScreen;

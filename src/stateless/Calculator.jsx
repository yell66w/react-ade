import { CalculatorProvider } from "../context/CalculatorContext";
import KeyContainer from "../stateful/KeyContainer";
import DisplayScreen from "./DisplayScreen";
const Calculator = () => {
  return (
    <CalculatorProvider>
      <div className="bg-zinc-900 w-80 py-6 flex px-6 gap-6 flex-col">
        <DisplayScreen />
        <KeyContainer />
      </div>
    </CalculatorProvider>
  );
};

export default Calculator;

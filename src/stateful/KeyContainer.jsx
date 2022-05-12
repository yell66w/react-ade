import keys from "../constants/keys";
import { useCalculator } from "../context/CalculatorContext";
import Key from "../stateless/Key";

const KeyContainer = () => {
  const { handleDigitFn, handleOperatorFn, handleEqualsFn, handleFnKeys } =
    useCalculator();

  const performAction = (type, concValue) => {
    switch (type) {
      case "digit":
        handleDigitFn(concValue);
        break;
      case "operator":
        handleOperatorFn(concValue);
        break;
      case "equals":
        handleEqualsFn(concValue);
      case "fn-key":
        handleFnKeys(concValue);
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {keys.map((val) => {
        return (
          <Key
            onClick={() => performAction(val.type, val.value)}
            key={val.value}
            type={val.type}
            cols={val.cols ? val.cols : 1}
          >
            {val.value}
          </Key>
        );
      })}
    </div>
  );
};

export default KeyContainer;

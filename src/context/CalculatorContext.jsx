import React, { useContext, useState } from "react";

const CalculatorContext = React.createContext();

export function useCalculator() {
  return useContext(CalculatorContext);
}

export const CalculatorProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const [storedValue, setStoredValue] = useState(null);
  const [operation, setOperation] = useState("");
  const [shouldReset, setShouldReset] = useState(false);

  const handleDigitFn = (concValue) => {
    if (value === 0) {
      if (concValue !== 0) setValue(`${concValue}`);
    } else {
      if (value.toString().length < 14) {
        if (shouldReset) {
          setValue(`${concValue}`);
          setShouldReset(false);
        } else {
          setValue(`${value}` + `${concValue}`);
        }
      }
    }
  };
  const handleIfStoredValueExists = (ans) => {
    setValue(ans);
    setStoredValue(ans);
    setOperation("");
  };
  const handleMath = (operatorValue) => {
    switch (operatorValue) {
      case "+":
        if (storedValue) {
          const ans = Number(storedValue) + Number(value);
          handleIfStoredValueExists(ans);
        } else {
          setStoredValue(value);
        }
        break;
      case "-":
        if (storedValue) {
          const ans = Number(storedValue) - Number(value);
          handleIfStoredValueExists(ans);
        } else {
          setStoredValue(value);
        }
        break;
      case "÷":
        if (storedValue) {
          let ans = 0;
          let sanitizedStoredValue = Number(storedValue);
          let sanitizedValue = Number(value);
          if (sanitizedValue === 0) {
            ans = "∞";
          } else if (sanitizedStoredValue === 0) {
            ans = 0;
          } else {
            ans = sanitizedStoredValue / sanitizedValue;
          }
          handleIfStoredValueExists(ans);
        } else {
          setStoredValue(value);
        }
        break;
      case "x":
        if (storedValue) {
          const ans = Number(storedValue) * Number(value);
          handleIfStoredValueExists(ans);
        } else {
          setStoredValue(value);
        }
        break;
      default:
        break;
    }
  };
  const handleOperatorFn = (operatorValue) => {
    if (operation) {
      handleMath(operation);
      setShouldReset(true);
      setOperation(operatorValue);
    } else {
      setShouldReset(true);
      handleMath(operatorValue);
      setOperation(operatorValue);
    }
  };
  const handleEqualsFn = () => {
    handleMath(operation);
    setShouldReset(true);
    setOperation("");
    setStoredValue("");
  };

  const handleResetFn = () => {
    setValue(0);
    setStoredValue(null);
    setOperation("");
    setShouldReset(false);
  };
  const handleSign = () => {
    setValue(`${Number(value) * -1}`);
  };
  const handlePercent = () => {
    setValue(`${Number(value) / 100}`);
  };
  const handleFnKeys = (fnKey) => {
    switch (fnKey) {
      case "C":
        handleResetFn();
        break;
      case "±":
        handleSign();
        break;
      case "%":
        handlePercent();
        break;
      default:
        break;
    }
  };

  return (
    <CalculatorContext.Provider
      value={{
        value,
        storedValue,
        operation,
        shouldReset,
        handleDigitFn,
        handleOperatorFn,
        handleEqualsFn,
        handleFnKeys,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
export default CalculatorContext;

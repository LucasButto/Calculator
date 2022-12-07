import { useContext, useState } from "react";
import ResultContext from "../../context/ResultContext";

export const useCalculations = () => {
  const {
    setPanelNumber,
    setResult,
    value,
    setValue,
    result,
    lastOperator,
    setLastOperator,
  } = useContext(ResultContext);

  const [changeNumber, setChangeNumber] = useState(false);

  const operators = ["+", "-", "*", "/"];

  const calculateResult = (content) => {
    if (content === "C") {
      setResult("");
      setValue("");
      setLastOperator("");
      setChangeNumber(false);
      setPanelNumber("0.");
    }

    if (content === "=") {
      if (value === "" && result === "") {
        alert("Debe ingresar valores para calcular");
      } else {
        console.log("result: ", result);
        console.log("value1: ", value);
        console.log("lastOperator: ", lastOperator);
        setPanelNumber(logicsOperations());
      }
    }

    if (operators.includes(content)) {
      if (value === "" && result === "") {
        alert("Debe ingresar valores para calcular");
      } else if (lastOperator === "") {
        setResult(value);
      } else {
        setResult(logicsOperations());
      }

      setLastOperator(content);
      setValue("");
      changeNumber === false ? setChangeNumber(true) : setChangeNumber(false);
    }
    if (!operators.includes(content) && content !== "C" && content !== "=") {
      console.log("in setvalues", changeNumber);
      if (changeNumber === false) {
        setValue(value + content);
        setPanelNumber(value + content);
      }
    }
  };

  const logicsOperations = () => {
    let logicResult = 0;

    switch (lastOperator) {
      case "+":
        logicResult = parseFloat(result) + parseFloat(value);
        break;
      case "-":
        logicResult = parseFloat(result) - parseFloat(value);
        break;
      case "*":
        logicResult = parseFloat(result) * parseFloat(value);
        break;
      case "/":
        if (value === "0") {
          alert("No se puede dividir por 0");
        } else {
          logicResult = parseFloat(result) / parseFloat(value);
        }
        break;
      default:
        break;
    }

    return logicResult;
  };

  return {
    calculateResult,
  };
};

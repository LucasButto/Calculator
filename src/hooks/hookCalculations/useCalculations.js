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

  const cleanValues = () => {
    setResult("");
    setValue("");
    setLastOperator("");
    setChangeNumber(false);
    setPanelNumber("0.");
  };

  const calculateResult = (content) => {
    if (content === "C") {
      cleanValues();
    }

    if (content === "=") {
      if (value === "" && result === "") {
        alert("Debe ingresar valores para calcular");
      } else if (isNaN(value) || isNaN(result)) {
        alert("Chupala Fran");
        cleanValues();
      } else {
        setPanelNumber(
          new Intl.NumberFormat("de-DE").format(logicsOperations().toFixed(5))
        );
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
          cleanValues();
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

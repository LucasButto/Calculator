import { useState, createContext } from "react";

const ResultContext = createContext();

const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [panelNumber, setPanelNumber] = useState("0.");
  const [lastOperator, setLastOperator] = useState("");

  const props = {
    result,
    setResult,
    value,
    setValue,
    panelNumber,
    setPanelNumber,
    lastOperator,
    setLastOperator,
  };

  return (
    <ResultContext.Provider value={props}>{children}</ResultContext.Provider>
  );
};

export { ResultContextProvider };
export default ResultContext;

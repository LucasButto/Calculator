import { useState, createContext } from "react";

const ResultContext = createContext();

const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState("0.");

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export { ResultContextProvider };
export default ResultContext;

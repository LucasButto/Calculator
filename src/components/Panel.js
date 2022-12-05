import React, { useContext } from "react";
import ResultContext from "../context/ResultContext";
import "../styles/Panel.css";

const Panel = () => {
  const { result } = useContext(ResultContext);

  return (
    <div className="panel-container">
      <p className="panel-result">{result}</p>
    </div>
  );
};

export default Panel;

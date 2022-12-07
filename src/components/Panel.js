import React, { useContext } from "react";
import ResultContext from "../context/ResultContext";
import "../styles/Panel.css";

const Panel = () => {
  const { panelNumber } = useContext(ResultContext);

  return (
    <div className="panel-container">
      <p className="panel-result">{panelNumber}</p>
    </div>
  );
};

export default Panel;

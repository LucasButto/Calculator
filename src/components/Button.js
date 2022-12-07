import React from "react";
import { useCalculations } from "../hooks/hookCalculations/useCalculations";
import "../styles/Button.css";

const Button = ({ content, extraClass }) => {
  const { calculateResult } = useCalculations();

  const clickButtonHandler = () => {
    calculateResult(content);
  };
  return (
    <div>
      <button
        className={`button ${extraClass ? extraClass : ""}`}
        onClick={clickButtonHandler}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;

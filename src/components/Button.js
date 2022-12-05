import React from "react";
import "../styles/Button.css";

const Button = ({ content, extraClass }) => {
  return (
    <div>
      <button className={"button " + extraClass}>{content}</button>
    </div>
  );
};

export default Button;

import React from "react";
import Button from "./Button";
import "../styles/ButtonsDisplay.css";

const ButtonsDisplay = () => {
  return (
    <div className="Buttons-container">
      <Button content={"7"} />
      <Button content={"8"} />
      <Button content={"9"} />
      <Button content={"/"} extraClass={"button-operators"} />
      <Button content={"4"} />
      <Button content={"5"} />
      <Button content={"6"} />
      <Button content={"x"} extraClass={"button-operators"} />
      <Button content={"1"} />
      <Button content={"2"} />
      <Button content={"3"} />
      <Button content={"-"} extraClass={"button-operators"} />
      <Button content={"0"} />
      <Button content={"."} />
      <Button content={"="} extraClass={"button-equal"} />
      <Button content={"+"} extraClass={"button-operators"} />
    </div>
  );
};

export default ButtonsDisplay;

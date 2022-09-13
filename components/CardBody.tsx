import React, { useContext } from "react";
import { LabelContext } from "../lib/context";

const CardBody = () => {
  const label = useContext(LabelContext);
  console.count("Render Card Body");

  return <div>{label.text}</div>;
};

export default CardBody;

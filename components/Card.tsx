import React from "react";
import CardBody from "./CardBody";

const Card = () => {
  console.count("Render Card");

  return (
    <div>
      <h4>Card</h4>
      <CardBody></CardBody>
    </div>
  );
};

export default Card;

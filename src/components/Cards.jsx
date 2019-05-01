import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ name, height, mass, gender }) => {
  return (
    <Card bg="dark" style={{ width: "16rem" }}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <li>Gender: {gender}</li>
        <li>Height: {height} inches</li>
        <li>Weight: {mass} kg</li>
      </Card.Body>
    </Card>
  );
};

export default Cards;

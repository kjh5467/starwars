import React from "react";
import Cards from "./Cards";
import { CardDeck, Col } from "react-bootstrap";

const CardList = ({ characters }) => {
  return (
    <CardDeck>
      {characters.map((result, i) => {
        return (
          <Col sm="12" md="6" lg="3">
            <Cards
              key={i}
              name={result.name}
              gender={result.gender}
              height={result.height}
              mass={result.mass}
            />
            <br />
          </Col>
        );
      })}
    </CardDeck>
  );
};

export default CardList;

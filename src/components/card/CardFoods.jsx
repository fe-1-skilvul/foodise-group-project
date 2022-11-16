import React from "react";
import { Card } from "react-bootstrap";
import { CardFood } from "../../config";

function CardFoods() {
  return (
    <div className="d-flex justify-content-center">
      {CardFood.map((card, index) => (
        <Card key={`cardkey-${index}`} className="mx-2" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={card.img} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
              <div className="d-flex">
                <p className="me-2 text-danger">{`${card.nutrition.kalori} Kkal`}</p>
                <p className="text-primary">{`${card.nutrition.carbon} Kg/CO2`}</p>
              </div>
            <Card.Text>
              {`Ingredients: ${card.ingredients}`}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardFoods;

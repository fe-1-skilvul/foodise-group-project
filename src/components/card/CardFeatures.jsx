import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { CardFeature } from '../../config';

function CardFeatures() {
  return (
    <Stack className="d-flex flex-wrap flex-md-row justify-content-center gap-3 align-items-center mt-3">
      {CardFeature.map((card, index) => (
        <Card
          key={`card-${index}`}
          style={{ width: '18rem' }}
          className="mx-2 text-center">
          <Card.Body>
            <img src={card.logo} alt="" />
            <Card.Title>{card.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {card.desc}
            </Card.Subtitle>
            <Card.Link href="#">
              <img src="/icons/chevron-right.svg" alt="" />
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </Stack>
  );
}

export default CardFeatures;

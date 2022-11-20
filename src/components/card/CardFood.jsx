import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardFood = ({ name, img, id, protein }) => {
  return (
    <Card style={{ width: '18rem', border: 'none' }}>
      <Card.Img className="rounded" variant="top" src={img} />
      <Card.Body>
        <p className="text-danger fs-6 fw-bold">
          Protein: {protein} g
        </p>
        <Link to={`/food/${id}`} className="text-decoration-none">
          <Card.Title className="text-link">{name}</Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardFood;

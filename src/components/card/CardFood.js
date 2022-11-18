import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardFood = ({ name, img, id, protein }) => {
  return (
    <Card style={{ width: '18rem', border: 'none' }}>
      <Card.Img className="rounded" variant="top" src={img} />
      <Card.Body>
        <Link
          to={'/foods/675s8900uwhwio00s'}
          className="text-decoration-none">
          <p className="text-danger fs-6 fw-bold">
            Protein: <span> {protein} </span> g
          </p>
          <Card.Title
            onClick={(e) => console.log(id)}
            className="text-link">
            {name}
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardFood;

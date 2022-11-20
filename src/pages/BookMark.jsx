import React, { useContext } from 'react';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import { TypoMain } from '../components/atoms';
import CardFood from '../components/card/CardFood';
import CategoryBar from '../components/category/CategoryBar';
import Notfound from '../components/notfound/Notfound';
import { loginCtx } from '../context/LoginCtx';
import { getSavedFoods } from '../Services/service';

const BookMark = () => {
  const { user } = useContext(loginCtx);
  const foods = getSavedFoods();

  return (
    <Row className="justify-content-md-center">
      <Col className="mt-5">
        <Stack className="p-4 shadow-sm p-3 mb-5 bg-body rounded d-flex flex-row justify-content-between align-items-start">
          <TypoMain text="Food" coloredText="Today" />
          <Button className="button button-outlined d-none d-md-block">
            Date
          </Button>
          <CategoryBar />
        </Stack>
        <Stack
          className="p-3  flex-row flex-wrap justify-content-center gap-5"
          style={{
            marginTop: '50px',
          }}>
          {foods !== null ? (
            foods.map((food, i) => {
              if (food.userid === user.id) {
                return (
                  <CardFood
                    key={i}
                    name={food.title}
                    id={food.id}
                    img={food.image}
                    protein={food.nutrition.nutrients[0].amount}
                  />
                );
              }
              return null;
            })
          ) : (
            <Notfound />
          )}
        </Stack>
      </Col>
    </Row>
  );
};

export default BookMark;

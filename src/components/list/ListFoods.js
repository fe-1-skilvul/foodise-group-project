import React from 'react';
import { Stack } from 'react-bootstrap';
import { fakeData } from '../../Services/db';
import CardFood from '../card/CardFood';

const ListFoods = () => {
  const data = fakeData;
  return (
    <Stack
      className="p-3  flex-row flex-wrap justify-content-center gap-5"
      style={{
        marginTop: '50px',
      }}>
      {data.map((food, i) => {
        return (
          <CardFood
            key={food.id}
            name={food.title}
            id={food.id}
            img={food.image}
          />
        );
      })}
    </Stack>
  );
};

export default ListFoods;

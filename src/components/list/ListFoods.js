import React, { useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods } from '../../features/FetchAPI/dataSlice';
import { fakeData } from '../../Services/db';
import CardFood from '../card/CardFood';

const ListFoods = () => {
  // const foods = useSelector((state) => state.foods);
  // const dispatch = useDispatch();
  const data = fakeData;
  // useEffect(() => {
  //   dispatch(fetchFoods());
  // }, []);
  // console.log(foods);
  return (
    <Stack
      className="p-3  flex-row flex-wrap justify-content-center gap-5"
      style={{
        marginTop: '50px',
      }}>
      {data.map((food, i) => {
        return (
          <CardFood
            key={i}
            name={food.title}
            id={food.id}
            img={food.image}
            protein={food.nutrition.nutrients[0].amount}
          />
        );
      })}
    </Stack>
  );
};

export default ListFoods;

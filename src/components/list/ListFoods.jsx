import React, { useContext, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterCtx } from '../../context/FilterCtx';
import { fetchFoods } from '../../features/FetchAPI/dataSlice';
import Loading from '../atoms/loading';
import CardFood from '../card/CardFood';
import Notfound from '../notfound/Notfound';

const ListFoods = () => {
  const { query, category } = useContext(filterCtx);
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods({ query, category }));
  }, [query, category]);
  // console.log(foods);
  return (
    <>
      {list.loading && <Loading />}
      {!list.loading && list.foods.length ? (
        <Stack
          className="p-3  flex-row flex-wrap justify-content-center gap-5"
          style={{
            marginTop: '50px',
          }}>
          {list.foods.map((food, i) => {
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
      ) : (
        <Notfound />
      )}
    </>
  );
};

export default ListFoods;

import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, Col, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TypoSubTitle } from '../components/atoms';
import Loading from '../components/atoms/loading';
import Nutrition from '../components/nutrition/Nutrition';
import { loginCtx } from '../context/LoginCtx';
import { fetchDetail } from '../features/FetchAPI/detailSlice';
import fakeDetail from '../Services/detail';
import { getSavedFoods, postNewFood } from '../Services/service';

const Detail = () => {
  // const detail.food = fakeDetail;
  const { user } = useContext(loginCtx);
  const [open, setOpen] = useState(false);
  const detail = useSelector((state) => state.detail);
  const id = useParams();
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    dispatch(fetchDetail(id));
  }, []);
  const handleSave = () => {
    const foods = getSavedFoods();
    const newfood = { ...fakeDetail, userid: user.id };
    let newdata = [];
    if (foods === null) {
      console.log('null');
      newdata.push(newfood);
      postNewFood(newdata);
    }
    if (foods !== null) {
      let double = false;
      foods.map((food) => {
        if (food.id === newfood.id && user.id === food.userid) {
          double = true;
          return setOpen(true);
        }
        return double;
      });
      if (double === false) {
        newdata = [...foods, newfood];

        newdata.push(newfood);

        postNewFood(newdata);
      }
    }
  };
  return (
    <>
      {detail.loading && <Loading />}
      {!detail.loading && detail.food ? (
        <Row
          style={{
            marginTop: '100px',
          }}>
          <Col>
            <Stack className="d-flex p-5 align-items-center  flex-row flex-wrap gap-5">
              <div>
                <img
                  src={detail.food.image}
                  alt="food"
                  className="img-fluid rounded bg-none"
                />
              </div>
              <div
                className="d-flex flex-column"
                style={{
                  maxWidth: '500px',
                }}>
                <p
                  style={{
                    fontWeight: '600',
                    fontSize: '24px',
                    lineHeight: '30px',
                    color: '#000',
                  }}>
                  {detail.food.title}
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: detail.food.summary,
                  }}></div>
              </div>
            </Stack>
            {open && (
              <Alert
                variant="danger"
                onClose={() => setOpen(false)}
                dismissible>
                Your food has been added
              </Alert>
            )}
            <Stack className="d-flex flex-row flex-wrap align-items-center p-md-5 gap-5">
              {detail.food.nutrition ? (
                <Stack className="mt-5 gap-4">
                  {detail.food.nutrition.nutrients.map((nuts, i) => {
                    if (nuts.name === 'Calories') {
                      return (
                        <Nutrition
                          icon={'/icons/fire-cal.svg'}
                          name={'Calories'}
                          value={`${nuts.amount} ${nuts.unit}`}
                        />
                      );
                    }
                    if (nuts.name === 'Fat') {
                      return (
                        <Nutrition
                          icon={'/icons/cloud-meatball.svg'}
                          name={'Fat'}
                          value={`${nuts.amount} ${nuts.unit}`}
                        />
                      );
                    }
                    if (nuts.name === 'Carbohydrates') {
                      return (
                        <Nutrition
                          icon={'/icons/wheat-awn.svg'}
                          name={'Carbohydrates'}
                          value={`${nuts.amount} ${nuts.unit}`}
                        />
                      );
                    }
                    if (nuts.name === 'Protein') {
                      return (
                        <Nutrition
                          icon={'/icons/dna.svg'}
                          name={'Protein'}
                          value={`${nuts.amount} ${nuts.unit}`}
                        />
                      );
                    }
                  })}
                </Stack>
              ) : (
                <></>
              )}

              <Stack className="d-flex justify-content-center align-items-center">
                <TypoSubTitle content={'Health Score'} />
                <div className="carbon-card">
                  <div className="carbon-circle">
                    <div className="box-carbon">
                      {detail.food.healthScore}
                    </div>
                  </div>
                  <Button
                    className="button button-main"
                    type="button"
                    onClick={() => handleSave()}>
                    Save
                  </Button>
                </div>
              </Stack>
            </Stack>
          </Col>
        </Row>
      ) : (
        <div>food kosong</div>
      )}
    </>
  );
};

export default Detail;

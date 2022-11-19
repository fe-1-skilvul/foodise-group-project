import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TypoSubTitle } from '../components/atoms';
import Nutrition from '../components/nutrition/Nutrition';
import { fetchDetail } from '../features/FetchAPI/detailSlice';
import fakeDetail from '../Services/detail';

const Detail = () => {
  // const detail.food = fakeDetail;
  const detail = useSelector((state) => state.detail);
  const id = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail(id));
  }, []);

  return (
    <>
      {detail.loading && <div>loading</div>}
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

            <Stack className="d-flex flex-row flex-wrap align-items-center p-md-5 gap-5">
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
              <Stack className="d-flex justify-content-center align-items-center">
                <TypoSubTitle content={'Health Score'} />
                <div className="carbon-card">
                  <div className="carbon-circle">
                    <div className="box-carbon">
                      {detail.food.healthScore}
                    </div>
                  </div>
                  <Button className="button button-main">Save</Button>
                </div>
              </Stack>
            </Stack>
          </Col>
        </Row>
      ) : (
        <div>food kosong</div>
      )}
      {/* <Row
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

          <Stack className="d-flex flex-row flex-wrap align-items-center p-md-5 gap-5">
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
            <Stack className="d-flex justify-content-center align-items-center">
              <TypoSubTitle content={'Health Score'} />
              <div className="carbon-card">
                <div className="carbon-circle">
                  <div className="box-carbon">{detail.food.healthScore}</div>
                </div>
                <Button className="button button-main">Save</Button>
              </div>
            </Stack>
          </Stack>
        </Col>
      </Row> */}
    </>
  );
};

export default Detail;

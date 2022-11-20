import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Category from '../components/category/Category';
import Layout from '../components/layout/Layout';
import ListFoods from '../components/list/ListFoods';
import ServicePortal from '../components/portal/ServicePortal';
import { loginCtx } from '../context/LoginCtx';

const Home = () => {
  return (
    <Row className="justify-content-md-center">
      <Col className="mt-5">
        <ServicePortal />
        <Category />
        <ListFoods />
      </Col>
    </Row>
  );
};

export default Home;

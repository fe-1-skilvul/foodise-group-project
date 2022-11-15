import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Category from '../components/category/Category';
import Layout from '../components/layout/Layout';
import ServicePortal from '../components/portal/ServicePortal';

const Home = () => {
  return (
    <Row className="justify-content-md-center" s>
      <Col className="mt-5">
        <ServicePortal />
        <Category />
      </Col>
    </Row>
  );
};

export default Home;

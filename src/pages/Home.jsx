import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
import ServicePortal from '../components/portal/ServicePortal';

const Home = () => {
  return (
    <Row
      className="justify-content-md-center"
      style={{
        marginTop: '100px',
      }}>
      <Col>
        <ServicePortal />
      </Col>
    </Row>
  );
};

export default Home;

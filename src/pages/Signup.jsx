import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { TypoTitle, TypoSubTitle } from '../components/atoms';
import FormSignup from '../components/forms/FormSignup';

const Signup = () => {
  return (
    <Row
      className="justify-content-md-center"
      style={{
        marginTop: '100px',
      }}>
      <Col xs={12} md={7}>
        <Stack gap={5}>
          <div>
            <TypoTitle content="Join Foodise" />
            <TypoSubTitle
              content="find your healty foods and check your food calory with
            foodise"
            />
          </div>
          <div>
            <img
              src="/images/thum1.png"
              width={420}
              height={400}
              alt=""
            />
          </div>
        </Stack>
      </Col>
      <Col xs={12} md={5}>
        <FormSignup />
      </Col>
    </Row>
  );
};

export default Signup;

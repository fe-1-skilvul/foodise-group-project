import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { TypoTitle, TypoSubTitle } from '../components/atoms';

const Signup = () => {
  return (
    <Row
      style={{
        marginTop: '100px',
      }}>
      <Col>
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
      <Col>2 of 2</Col>
    </Row>
  );
};

export default Signup;

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ButtonLogin from '../buttons/ButtonLogin';

const FormSignup = () => {
  return (
    <Form
      style={{
        marginTop: '100px',
      }}>
      <Form.Group className="mb-3">
        <Form.Label className="label-text">Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="label-text">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="label-text">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="label-text">
          Confirm Password
        </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button
        type="button"
        size="lg"
        className="w-100 button button-main">
        Sign up
      </Button>
    </Form>
  );
};

export default FormSignup;

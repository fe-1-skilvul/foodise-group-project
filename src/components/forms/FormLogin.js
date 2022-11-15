import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormLogin = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label className="label-text">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="label-text">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button
        type="button"
        size="lg"
        className="w-100 button button-main">
        Login
      </Button>
    </Form>
  );
};

export default FormLogin;

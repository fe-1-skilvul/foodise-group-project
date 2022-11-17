import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { nanoid } from '@reduxjs/toolkit';
import { register } from '../../Services/auth';
import { useNavigate } from 'react-router-dom';
import { loginCtx } from '../../context/LoginCtx';

const FormSignup = () => {
  const [dataSignup, setDataSignup] = useState({});
  const { setShow } = useContext(loginCtx);
  const navigate = useNavigate();
  const getDataSignup = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === 'username') {
      return setDataSignup((prev) => ({ ...prev, username: value }));
    }
    if (name === 'password') {
      return setDataSignup((prev) => ({ ...prev, password: value }));
    }
    if (name === 'email') {
      return setDataSignup((prev) => ({ ...prev, email: value }));
    }
  };
  const handleRegister = () => {
    const res = register({ dataSignup, id: nanoid() });

    if (res.response === true) {
      alert('register success');
      setShow(true);
    }
  };
  return (
    <Form
      style={{
        marginTop: '100px',
      }}>
      <Form.Group className="mb-3">
        <Form.Label className="label-text">Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          onChange={(e) => getDataSignup(e)}
          placeholder="Enter Username"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="label-text">Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={(e) => getDataSignup(e)}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="label-text">Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={(e) => getDataSignup(e)}
          placeholder="Password"
        />
      </Form.Group>
      <Button
        type="button"
        onClick={() => handleRegister()}
        size="lg"
        className="w-100 button button-main">
        Sign up
      </Button>
    </Form>
  );
};

export default FormSignup;

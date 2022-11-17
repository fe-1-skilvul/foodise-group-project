import React, { useContext, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginCtx } from '../../context/LoginCtx';
import { login } from '../../Services/auth';

const FormLogin = () => {
  const [dataLogin, setDataLogin] = useState();
  const [open, setOpen] = useState(false);
  const { setShow } = useContext(loginCtx);
  const navigate = useNavigate();
  const getInputLogin = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === 'password') {
      return setDataLogin((prev) => ({ ...prev, password: value }));
    }
    if (name === 'email') {
      return setDataLogin((prev) => ({ ...prev, email: value }));
    }
  };
  const handleLogin = () => {
    const isLogin = login(dataLogin);
    console.log(isLogin.response);
    if (!isLogin.response) {
      return setOpen(true);
    }
    setShow(false);
    navigate('/home');
  };
  return (
    <Form>
      {open ? (
        <Alert
          variant="danger"
          onClose={() => setOpen(false)}
          dismissible>
          Opps something wasnt right, Try again!
        </Alert>
      ) : null}

      <Form.Group className="mb-3">
        <Form.Label className="label-text">Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={(e) => getInputLogin(e)}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="label-text">Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={(e) => getInputLogin(e)}
          placeholder="Password"
        />
      </Form.Group>
      <Button
        type="button"
        size="lg"
        onClick={(e) => handleLogin()}
        className="w-100 button button-main">
        Login
      </Button>
    </Form>
  );
};

export default FormLogin;

import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormLogin from '../components/forms/FormLogin';
import FormSignup from '../components/forms/FormSignup';
import { loginCtx } from '../context/LoginCtx';

const Login = () => {
  const { show, setShow } = useContext(loginCtx);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormLogin />
      </Modal.Body>
    </Modal>
  );
};

export default Login;

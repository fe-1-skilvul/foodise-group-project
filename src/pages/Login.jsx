import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import FormLogin from '../components/forms/FormLogin';
import { loginCtx } from '../context/LoginCtx';

const Login = () => {
  const { show, setShow } = useContext(loginCtx);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Sign <span className="color-prim">in</span>{' '}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormLogin />
      </Modal.Body>
    </Modal>
  );
};

export default Login;

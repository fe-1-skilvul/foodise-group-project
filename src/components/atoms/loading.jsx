import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <Modal
      show={true}
      className="d-flex bg-none justify-content-center align-items-center">
      <Spinner animation="border" />
    </Modal>
  );
};

export default Loading;

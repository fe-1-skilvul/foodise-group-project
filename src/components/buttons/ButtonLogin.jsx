import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonLogin = ({ click, name }) => {
  return (
    <Button
      type="button"
      className="w-100 btn-primary"
      onClick={click}>
      {name}
    </Button>
  );
};

export default ButtonLogin;

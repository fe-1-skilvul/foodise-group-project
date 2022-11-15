import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Login from '../../pages/Login';
import Appbar from '../navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Appbar />
      <Container>{children}</Container>
      <Login />
    </>
  );
};

export default Layout;

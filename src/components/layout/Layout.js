import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Appbar from '../navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Appbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
